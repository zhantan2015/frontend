<template>
    <div class="tips-box">
        <div class="tips">
            <h2>{{tips}}</h2>
            <h5>{{time}}秒后跳转到首页</h5>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NotFound",
        data() {
            return {
                t: undefined,
                time: 3,
                tips: '哎呀~页面加载失败了呢！'
            }
        },
        created() {
            let t = setInterval(() => {
                this.time--;
                if (this.time === 0) {
                    clearInterval(t);
                    location.href = '/';
                }
            }, 1000);
        },
    }
</script>

<style scoped lang="less">
    .tips-box {
        margin: 1em;
        background-color: #ddd;
        padding-top: 2em;
        .tips {
            height: 20em;
            text-align: center;
            h5 {
                margin-top: 5em;
            }
        }
    }
</style>