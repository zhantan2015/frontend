<template>
    <div>
        <div class="side-box">
            <img src="../../static/img/avatar.jpg" alt="头像">
            <h1>守望者旃檀</h1>
            <span class="icon icon-dingwei"><code>广东·广州</code></span>
            <div>
                <p>即使生命燃烧成灰烬 </p>
                <p>你仍然能在黑夜里 </p>
                <p>听到我灵魂的叹息 </p>
            </div>
            <div>
                <ul>
                    <li><a href="//weibo.com/greatzhantan" target="_blank" title="新浪微博">
                        <i class="icon icon-weibo"></i></a></li>
                    <li><a href="//steamcommunity.com/id/greatzhantan/" target="_blank" title="Steam">
                        <i class="icon icon-steam"></i></a></li>
                    <li><a href="javascript:" @click.prevent="copy">
                        <i class="icon icon-gmail" title="zhantan2015@gmail.com - 点击复制"></i></a></li>
                    <li><a href="//tieba.baidu.com/home/main?id=54f9e697835fe6aa804117" target="_blank"
                           title="百度贴吧"><i class="icon icon-tieba"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        data() {
            return {}
        },
        methods: {
            copy() {
                let tag = document.createElement('input');
                tag.setAttribute('id', 'cp_hgz_input');
                tag.value = 'zhantan2015@gmail.com';
                document.getElementsByTagName('body')[0].appendChild(tag);
                document.getElementById('cp_hgz_input').select();
                document.execCommand('copy');
                document.getElementById('cp_hgz_input').remove();
                alert('复制成功！')
            }
        }
    }
</script>

<style scoped lang="less">
    a {
        text-decoration: none;
    }

    .side-box {
        position: absolute;
        top: 8em;
        left: 0;
        padding: 1em;
        text-align: center;
        width: 100%;
        height: 100%;
        img {
            margin-top: .3em;
            width: 9em;
            height: 9em;
        }
        h1 {
            color: #fff;
            margin-top: 1.2em;
            margin-bottom: .4em;
            font-family: fzxk, sans-serif;
            font-size: 3.2em;
        }
        .icon-dingwei, .icon-weibo, .icon-steam, .icon-gmail, .icon-tieba {
            margin-top: .1em;
            margin-bottom: .1em;
            font-size: 2em;
            color: #fff;
        }
        .icon-dingwei {
            color: #ddd;
            font-size: 1.8em;
            code {
                font-family: simkai, sans-serif;
                font-size: .8em;
                font-weight: bold;
                margin-left: .4em;
            }
        }
        i {
            margin-left: .8em;
            margin-right: .8em;
        }
        p {
            font: 1.2em fzxk, sans-serif;
            color: #fff;
            margin-top: 1em;
            margin-bottom: 1em;
        }
        ul {
            margin: 0 auto;
            padding: 0;
            li {
                display: inline-block;
                margin-left: -1em;
                margin-right: -1em;
            }
        }
        @media screen and (max-width: 1260px) {
            h1 {
                font-size: 2em;
            }

            .icon-dingwei, .icon-weibo, .icon-steam, .icon-gmail, .icon-tieba {
                font-size: 1.6em;
            }

            p {
                font-size: 1.14em;
            }
        }
    }

</style>