<template>
    <div class="root-box">
        <span class="btn btn-danger" @click="main">Run</span>
    </div>
</template>

<script>
    function log(t) {
        console.info(t)
    }

    function err(t) {
        console.error(t)
    }

    export default {
        name: "JSTest",
        data() {
            return {}
        },
        methods: {
            main() {
                // let promise = new Promise((resolve, reject) => {
                //     if (Math.random() > 0.495) resolve(1);
                //     else reject(2)
                // });
                // promise.then((re) => {
                //     log(re)
                // }, (re) => {
                //     err(re)
                // })

                let a = m => (m > 0.495);

                let resolve = (re) => {
                    log(re)
                };

                function reject(re) {
                    err(re)
                }

                let cb = (resolve, reject) => {
                    setTimeout(() => {
                        let t = a(Math.random());
                        if (t) resolve(t);
                        else reject(t);
                    }, 500);
                };

                cb(resolve, reject)
            }
        },
    }
</script>

<style scoped lang="less">
    .root-box {
        margin: 2em;

        .btn {

        }
    }
</style>