<template>
    <div>
        <div class="player-box">
            <div id="dplayer"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Video",
        created() {
            this.$store.commit('set_active_tab', '影');
        },
        mounted() {
            const dp = new DPlayer({
                container: document.getElementById('dplayer'),
                video: {
                    url: '//src.zhantan666.cn/video/紫日.mp4',
                },
            });
        },
        beforeRouteLeave(to, from, next) {
            this.$store.commit('set_active_tab', undefined);
            next()
        }
    }
</script>

<style scoped>
    .player-box {
        position: relative;
        width: 100%;
    }
</style>