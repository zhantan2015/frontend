<template>
    <div id="app">
        <div v-if="!$store.state.articles" class="root-loading">
            <Loading/>
        </div>
        <transition name="about">
            <div v-show="about_show" class="about">
                <i class="icon icon-close close" @click="about_show=false"></i>
                <img src="../static/img/avatar.jpg" alt="头像">
                <h4>守望者旃檀</h4>
                <i class="icon icon-dingwei"><code>广东·广州</code></i>
                <p>
                    即使生命燃烧成灰烬 <br>
                    你仍然能在黑夜里 <br>
                    听到我灵魂的叹息 <br>
                </p>
                <div>
                    <i class="icon icon-weibo" @click="i_click(1)"></i>
                    <i class="icon icon-steam" @click="i_click(2)"></i>
                    <i class="icon icon-gmail" @click="i_click(3)"></i>
                    <i class="icon icon-tieba" @click="i_click(4)"></i>
                </div>
            </div>
        </transition>
        <div class="to-top icon icon-top">
        </div>
        <header>
            <div class="header container-fluid">
                <div class="row">
                    <nav class="col-xs-10">
                        <ul class="">
                            <li :class="{active:$store.state.active_tab==='文'}" @click="nav_click('/article')">
                                <i class="icon icon-wenzhangguanli"></i>文
                            </li>
                            <li :class="{active:$store.state.active_tab==='图'}" @click="nav_click('/picture')">
                                <i class="icon icon-tupian"></i>图
                            </li>
                            <li :class="{active:$store.state.active_tab==='影'}" @click="nav_click('/video')">
                                <i class="icon icon-iconset0128"></i>影
                            </li>
                            <li :class="{active:$store.state.active_tab==='音'}" @click="nav_click('/music')">
                                <i class="icon icon-yinyue"></i>音
                            </li>
                        </ul>
                    </nav>
                    <div class="about-btn col-xs-2">
                        <img class="" src="./assets/img/logo.jpg" alt="about" @click="about_show = !about_show">
                    </div>
                </div>
            </div>
        </header>
        <div class="side-bar">
            <Sidebar/>
        </div>
        <main>
            <div class="view-box">
                <router-view/>
            </div>
        </main>
        <div class="theater-box">
            <Theater/>
        </div>
    </div>
</template>

<script>
    import Loading from './components/Loading'
    import Sidebar from './components/Sidebar'
    import Theater from './components/Theater'

    export default {
        name: "App",
        data() {
            return {
                about_show: false,
            }
        },
        methods: {
            nav_click(p) {
                this.$router.push(p);
            },
            i_click(t) {
                if (t === 1) {
                    window.open('https://weibo.com/greatzhantan')
                } else if (t === 2) {
                    window.open('https://steamcommunity.com/id/greatzhantan/')
                } else if (t === 3) {
                } else if (t === 4) {
                    window.open('https://tieba.baidu.com/home/main?id=54f9e697835fe6aa804117')
                }
            }
        },
        components: {
            Loading, Sidebar, Theater
        },
        created() {
        }
    }
</script>

<style scoped lang="less">
    @import "assets/css/main";

    .root-loading {
        position: fixed;
        z-index: 10001;
        width: 100%;
        height: 100%;
        background-color: #333;
    }

    .to-top {
        display: none;
        position: fixed;
        cursor: pointer;
        text-align: center;
        width: 50px;
        height: 50px;
        color: white;
        font-size: 2.3em;
        background: blueviolet;
        border-radius: 50%;
        bottom: calc(~"10% - 64px");
        right: calc(~"35% - 50px - 1em");
        z-index: 1000;
        font-weight: bolder;
        line-height: 48px;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);
        @media screen and (max-width: 768px) {
            bottom: 1em;
            right: 1em;
        }
    }

    header {
        position: fixed;
        z-index: 1000;
        width: 100%;
        top: 0;
        left: 0;
        height: 4em;
        background-color: darkslategrey;

        .header {
            max-width: 768px;
            margin: auto;
        }

        .row {
            margin-right: 0;
        }

        nav {
            display: inline-block;
            height: 4em;

            ul {
                line-height: 4em;
                display: inline;
                font-size: 1em;

                li {
                    i {
                        margin-right: .1em;
                        font-size: 1em;
                    }

                    float: left;
                    margin-left: 5%;
                    color: #bbb;
                    cursor: pointer;
                }

                .active {
                    font-size: 1.8em;
                    color: #eee;

                    i {
                        font-size: .8em;
                    }
                }
            }
        }

        .about-btn {
            display: inline-block;
            margin: .5em 0 .5em 0;
            cursor: pointer;

            img {
                width: 3em;
                height: 3em;
            }

            @media screen and (min-width: 860px) {
                display: none;
            }
        }
    }

    .about {
        position: fixed;
        z-index: 999;
        top: 4em;
        right: 0;
        padding: 1em;
        text-align: center;
        width: 15em;
        background-color: ghostwhite;

        .close {
            position: absolute;
            top: .4em;
            right: 0;
            padding: .1em;
            font-size: 1em;
            font-weight: 700;
            background-color: red;
            border-radius: 3px;
        }

        img {
            margin-top: .3em;
            width: 8em;
            height: 8em;
        }

        h4 {
            font-weight: bolder;
            margin-bottom: 0;
        }

        .icon-dingwei code {
            font-family: simkai, sans-serif;
            font-size: 1em;
            font-weight: bold;
        }

        .icon-dingwei, .icon-weibo, .icon-steam, .icon-gmail, .icon-douyulogoiconziti {
            margin-top: .1em;
            margin-bottom: .1em;
            font-size: 1em;
        }

        .icon-douyulogoiconziti {
            font-weight: bold;
            font-size: 1.1em;
        }

        i {
            margin-left: .8em;
            margin-right: .8em;
        }

        p {
            font: 1em fzxk, sans-serif;
            margin-top: 1em;
            margin-bottom: 1em;
        }
    }

    .about-enter-active {
        animation: about_show .6s;
    }

    .about-leave-active {
        animation: about_show .6s reverse;
    }

    .side-bar {
        position: fixed;
        top: 0;
        left: 0;
        width: 20%;
        height: 100%;
        background-color: #443344;
        z-index: 999;
        @media screen and (max-width: 860px) {
            display: none;
        }
    }

    main {
        position: absolute;
        top: 4em;
        width: 100%;
        background-color: #323;
        min-height: 100%;

        .view-box {
            position: absolute;
            left: 20%;
            right: 35%;
            background-color: #323;
            width: 45%;
            @media screen and (max-width: 860px) {
                left: 0;
                width: 65%;
            }
            @media screen and (max-width: 768px) {
                left: 0;
                width: 100%;
            }
        }
    }

    .theater-box {
        position: fixed;
        right: 0;
        width: 35%;
        height: 100%;
        background-color: #323;
        @media screen and (max-width: 768px) {
            display: none;
        }
    }

    @keyframes about_show {
        from {
            top: -16.6em;
        }
        to {
            top: 4em;
        }
    }
</style>