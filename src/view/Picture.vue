<template>

</template>

<script>
    export default {
        name: "Picture",
        created() {
            this.$store.commit('set_active_tab', '图')
        },
        beforeRouteLeave(to, from, next) {
            this.$store.commit('set_active_tab', undefined);
            next()
        }
    }
</script>

<style scoped>

</style>