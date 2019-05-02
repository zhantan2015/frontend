<template>
    <div class="article-box">
        <article v-if="$store.state.article">
            <div class="img"><img class="img-responsive" :src="img_static_url+$store.state.article.cover"></div>
            <h1 v-text="$store.state.article.title"></h1>
            <div class="article-body" v-html="$store.state.article.body">
            </div>
        </article>
        <div v-if="$store.state.comments" class="comment-list">
            <comment-tmp v-for="comment in $store.state.comments" :key="comment.floor" :comment="comment"/>
        </div>
        <div v-if="notComment" class="comment-list">当前还没有评论哦~</div>
    </div>
</template>

<script>
    import Comment_tmp from '../components/Comment-tmp'
    import get_articles from "../tools/my_ajax";
    import {get_comments} from "../tools/my_ajax";

    export default {
        name: "Article_item",
        components: {
            'comment-tmp': Comment_tmp
        },
        data() {
            return {
                img_static_url: '//192.168.1.102/static/img/',
                notComment: false
            }
        },
        beforeCreate() {
            if (!this.$store.articles) {
                get_articles(data => {
                    data = JSON.parse(data);
                    this.$store.commit('set_articles', data);
                    this.$store.commit('set_article', data[this.$route.params.id - 1]);
                })
            }
            if (this.$store.state.comments && this.$store.state.comments[0].article_id !== this.$route.params.id)
                this.$store.commit('set_comments', undefined);
            if (!this.$store.state.comments) {
                get_comments(this.$route.params.id, data => {
                    data = JSON.parse(data);
                    if (data.length === 0) {
                        this.notComment = true;
                        return
                    }
                    for (let i = 0; i < data.length; i++) {
                        if (!data[i].avatar) {
                            data[i].avatar = window.localStorage.getItem('avatar')
                        }
                    }
                    this.$store.commit('set_comments', data);
                })
            }
        },
        created() {
            $('.to-top').click();
        },
    }
</script>

<style lang="less" scoped>
    .article-box {
        /*max-width: 768px;*/
        /*margin: auto;*/
        /*position: relative;*/
        article {
            margin: 1em 1em 0;
            padding-bottom: 1em;
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
            h1 {
                text-align: center;
                margin-top: .3em;
                margin-bottom: .2em;
            }
            .article-body {
                /*background-color: #fff;*/
                font: 1.2em simkai, sans-serif;
                font-weight: bold;
                margin: 1em 1em 0;
                width: auto;
                min-height: 100px;
                line-height: 1.2em;
            }
        }
        .comment-list {
            margin: 0 1em 1em;
            padding: 0;
            background-color: #eee;
        }
    }
</style>