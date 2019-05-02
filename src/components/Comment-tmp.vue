<template>
    <div>
        <div class="comment-item">
            <div class="floor">{{comment.floor}}#</div>
            <div class="user-info">
                <div class="avatar"><img :src="comment.avatar" alt=""></div>
                <div class="nick" v-text="comment.user"></div>
            </div>
            <div class="content" v-text="comment.content"></div>
            <div class="footer" v-html="comment.time"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Comment-tmp",
        props: ['comment'],
    }
</script>

<style scoped lang="less">
    .comment-item {
        display: inline-block;
        border: .1em #aaa solid;
        width: 100%;
        padding: 1em;
        .floor {

        }
        .user-info {
            width: 66px;
            display: block;
            float: left;
            img {
                width: 66px;
                height: auto;
            }
            .nick {
                text-align: center;
            }
        }
        .content {
            margin-left: 66px;
            padding-left: 1em;
            height: 10em;
        }
        .footer {
            text-align: center;
        }
    }
</style>