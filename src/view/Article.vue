<template>
    <div v-if="$store.state.articles!=='error'">
        <Card v-for="article in $store.state.articles" :key="article.id" :article="article"/>
    </div>
</template>

<script>
    import Card from '../components/Card'
    import get_articles from '../tools/my_ajax'

    export default {
        name: "Article",
        components: {
            Card,
        },
        beforeCreate() {
            if (!this.$store.state.articles)
                get_articles(data => {
                    data = JSON.parse(data);
                    this.$store.commit('set_articles', data);
                });
        },
        created() {
            this.$store.commit('set_active_tab', '文')
        },
        beforeRouteLeave(to, from, next) {
            this.$store.commit('set_active_tab', undefined);
            next()
        }
    }
</script>

<style lang="less" scoped>
    div {
        margin: auto;
    }
</style>