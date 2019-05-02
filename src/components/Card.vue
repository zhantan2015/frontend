<template>
    <article>
        <div class="img"><img class="img-responsive" :src="'/static/img/'+article.cover"></div>
        <h1 v-text="article.title"></h1>
        <div class="summary" v-html="article.body"></div>
        <div class="more"><span class="btn" @click="more(article.id)">查看全文</span></div>
        <div class="footer">
            <i class="icon icon-rili"></i><b v-text="article.date"></b>
            <i class="icon icon-comment"></i><b v-text="article.comment_s"></b>
            <i class="icon icon-label_icon"></i>
            <b class="sort" v-for="sort in article.sort" v-text="sort"></b>
        </div>
    </article>
</template>

<script>
    export default {
        name: "Card",
        data() {
            return {}
        },
        props: ['article'],
        methods: {
            more(id) {
                let article = this.$store.state.articles[id - 1];
                this.$store.commit('set_article', article);
                this.$router.push('/article/' + id);
            }
        }
    }
</script>

<style lang="less" scoped>
    article {
        margin: 1em;
        background-color: #ddd;
        .img {
            position: relative;
            width: 100%;
            height: auto;
            max-height: 192px;
            overflow: hidden;
            .img-responsive {
                /*position: absolute;*/
                bottom: 0;
                left: 0;
                height: auto;
                width: 100%;
            }
        }
        .h4, .more, .footer {
            padding-left: .2em;
        }
        h1 {
            text-align: center;
            margin-top: .3em;
            margin-bottom: .2em;
        }
        .summary {
            font: 1.2em simkai, sans-serif;
            font-weight: bold;
            margin: 1em;
            height: 8em;
            line-height: 1.2em;
            overflow-y: hidden;
        }
        .more {
            span {
                font-weight: lighter;
                color: rebeccapurple;
                &:hover {
                    border-radius: 2em;
                    background-color: lightslategrey;
                    color: #eee;
                }
            }
        }
        .footer {
            padding: .5em;
            .icon {
                margin-left: 8%;
            }
            .sort {
                margin-right: .3em;
                cursor: pointer;
                &:hover {
                    color: red;
                }
            }
        }
    }

</style>