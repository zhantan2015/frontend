<template>
    <div class="login-box">
        <header class="container-fluid">
            <div class="row">
                <span class="col-xs-1 h4"></span>
                <span class="col-xs-2 h4"></span>
                <span class="h4 col-xs-2 z" :class="{active:!register}" @click="register=false">登录</span>
                <span class="col-xs-2 h4"></span>
                <span class="h4 col-xs-2 z" :class="{active:register}" @click="register=true">注册</span>
                <span class="col-xs-2 h4"></span>
                <span class="col-xs-1 h4"></span>
            </div>
        </header>
        <main class="container-fluid">
            <div v-show="al" class="al-box">
                <Al/>
            </div>
            <form action="javascript:" class="form-inline">

                <div v-show="register" class="form-group">
                    <label for="email" class="h4">邮箱</label>
                    <input type="email" id="email" name="email" placeholder="E-mail" class="form-control"
                           v-model="userInfo.email"/>
                </div>

                <div class="form-group">
                    <label for="username" class="h4">用户名</label>
                    <input type="text" id="username" name="username" placeholder="用户名" class="form-control"
                           v-model="userInfo.username"/>
                </div>

                <div class="form-group">
                    <label for="password" class="h4">密码</label>
                    <input type="password" id="password" name="password" placeholder="密码" class="form-control"
                           v-model="userInfo.password" @keydown.enter="submit"/>
                </div>

                <div v-show="register" class="form-group">
                    <label for="confirm_password" class="h4">确认密码</label>
                    <input type="password" id="confirm_password" name="confirm_password" placeholder="确认密码"
                           class="form-control"/>
                </div>

                <div v-show="register" class="form-group">
                    <label for="code" class="h4">邀请码</label>
                    <input type="text" id="code" name="code" placeholder="邀请码" class="form-control"
                           v-model="userInfo.code"/>
                </div>

                <div class="form-group footer">
                    <button type="submit" id="submit-btn" class="btn btn-success" @click.prevent="submit()">提交
                    </button>
                </div>
            </form>
        </main>
    </div>
</template>

<script>
    import my_login from '../tools/my_login'
    import my_validator from '../tools/my_validator'
    import Al from '../components/Ajax_loading'

    export default {
        name: "Login",
        data() {
            return {
                register: false,
                userInfo: {},
                al: false,
            }
        }, components: {Al},
        methods: {
            submit() {
                if ((!this.userInfo.username || !this.userInfo.password) || ((this.register)
                    && (!this.userInfo.email || !$('#confirm_password')[0].value || !this.userInfo.code))) {
                    toastr.options.positionClass = 'toast-top-full-width';
                    toastr.error('所有字段均为必填项');
                    return;
                }
                this.al = true;
                my_login(this.userInfo, this.register, data => {
                    data = JSON.parse(data);
                    if (!data.token) {
                        if (!data.tips)
                            toastr.error('用户名或密码错误！');
                        else {
                            if (data.tips === '注册成功！请登录') {
                                toastr.success(data.tips);
                                this.register = false
                            }
                            toastr.error(data.tips)
                        }
                    }
                    else {
                        toastr.success('登录成功！');
                        window.localStorage.setItem('token', data.token);
                        this.$router.go(-1);
                    }
                    this.al = false;
                });
                this.userInfo = {};
                $('#confirm_password')[0].value = '';
            }
        },
        created() {
            $(function () {
                $('form').bootstrapValidator(my_validator)
            })
        },
        beforeRouteEnter(to, from, next) {
            if (window.localStorage.getItem('token')) next('/')
            next()
        }
    }
</script>

<style scoped lang="less">
    .login-box {
        background-color: #ddd;
        padding: 1em;
        margin: 1em;
        min-height: 383px;
        header {
            text-align: center;
            span {
                padding: 0 0 .4em;
                margin: 0;
                height: 2em;
                line-height: 2em;
                border-bottom: 1px #222 solid;

            }
            .col-xs-1 {
                border-bottom: 1px #ddd solid;
            }
            .z {
                cursor: pointer;
            }
            .active {
                border-radius: .5em .3em 0 0;
                border: #222 1px solid;
                border-bottom: transparent .1em solid;
            }

        }
        .al-box {
            position: absolute;
            left: 35%;
            top: 20%;
        }
        main {
            width: 100%;
            margin-top: 3em;
            .form-inline {
                margin: 0 auto;
                .form-group {
                    width: 100%;
                    label {
                        float: left;
                        width: 28%;
                        text-align: right;
                    }
                    input {
                        margin-left: 2em;
                        width: 60%;
                    }
                }
            }
        }
        .footer {
            position: relative;
            width: 100%;
            height: auto;
            text-align: center;
            margin-top: 1em;
            span {
                cursor: pointer;
            }
        }
    }

</style>