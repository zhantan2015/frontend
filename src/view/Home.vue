<template>
</template>
<script>
    export default {
        name: "Home",
        created() {
            if (this.$store.state.articles) {
                this.$router.push('/article');
                return
            }
            let url = '//192.168.1.102/ajax';
            let data = {
                type: 'article'
            };
            $.get(url, data, data => {
                this.$router.push('/article');
                this.$store.commit('set_articles', JSON.parse(data));
            });
        }
    }
</script>