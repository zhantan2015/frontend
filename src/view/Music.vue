<template>

</template>

<script>
    export default {
        name: "Music",
        created() {
            this.$store.commit('set_active_tab', '音')
        },
        beforeRouteLeave(to, from, next) {
            this.$store.commit('set_active_tab', undefined);
            next()
        }
    }
</script>

<style scoped>

</style>