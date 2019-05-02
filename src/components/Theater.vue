<template>
    <div>
        <div class="theater">
            <header>
                <h4>小剧场</h4>
                <p>当前在线人数：{{actors}}</p>
            </header>
            <main>
                <div class="msg-box" v-for="label in msgList">{{label}}</div>
            </main>
            <footer>
                <label><input type="text" v-model="msg" class="form-control" @keydown.enter="send_click"></label>
                <span class="btn-lg" @click="send_click" v-text="ws?'发送':'连接'"></span>
            </footer>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Theater",
        data() {
            return {
                actors: '未知',
                msg: '',
                ws: undefined,
                msgList: [],
            }
        },
        methods: {
            contentWS() {
                this.ws = new WebSocket('wss://ws.zhantan666.cn');
                this.ws.onmessage = evt => {
                    let json_data = JSON.parse(evt.data);
                    console.log(json_data);
                    if (json_data.type === 0) this.msgList = json_data.data;
                    else if (json_data.type === 1) this.msgList.push(json_data.data);
                    else if (json_data.type === 2) this.actors = json_data.data;
                };
                this.ws.onclose = evt => {
                    this.ws = undefined;
                    this.actors = '未知';
                }
            },
            send_click() {
                if (!this.ws) {
                    this.contentWS();
                    return
                }
                if (this.msg) {
                    if (parseInt(this.msg) === 0) this.ws.close();
                    else this.ws.send(this.msg);
                    this.msg = ''
                }
            },
        }
    }
</script>

<style scoped lang="less">
    .theater {
        position: absolute;
        top: calc(~"4em + 8%");
        right: 1em;
        width: calc(~"100% - 1em");
        height: calc(~"80% - 4em");
        max-height: 52em;
        border-radius: 1em;

        header {
            border-top-right-radius: 1em;
            border-top-left-radius: 1em;
            background: linear-gradient(to bottom, #eef, #dcc, #aaa, #787);
            position: absolute;
            top: 0;
            width: 100%;
            height: 3.3em;

            h4 {
                margin: .3em 0 0;
                text-align: center;
                font-family: inherit;
                font-weight: bold;
            }

            p {
                text-align: center;
            }
        }

        main {
            position: absolute;
            top: 3.3em;
            width: 100%;
            height: calc(~"100% - 3.3em - 44px");
            background-color: #333;

            .msg-box {
                /*background-color: indianred;*/
                color: #eef;
                margin-top: .3em;
                margin-left: 1em;
            }
        }

        footer {
            border-bottom-right-radius: 1em;
            border-bottom-left-radius: 1em;
            position: absolute;
            bottom: 0;
            height: 44px;
            width: 100%;

            input {
                position: absolute;
                bottom: 0;
                padding: 0;
                margin: 0;
                border: 0;
                height: 44px;
                font-size: 1.8em;
                width: calc(~"100% - 68px");
                border-radius: 0 0 0 .6em;
            }

            span {
                position: absolute;
                bottom: 0;
                right: 0;
                background-color: #aaa;
                border-radius: 0 0 .6em 0;
                cursor: pointer;
            }
        }
    }
</style>