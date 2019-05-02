export default {
    message: 'This value is not valid',
    feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
        username: {
            message: '用户名验证失败',
            validators: {
                notEmpty: {
                    message: '用户名不能为空'
                },
                stringLength: {
                    min: 6,
                    max: 18,
                    message: '长度必须在6~18位之间'
                },
                regexp: {
                    regexp: /^[a-zA-Z0-9_]+$/,
                    message: '用户名只能包含英文大小写字母、数字和下划线'
                }
            }
        },
        email: {
            validators: {
                notEmpty: {
                    message: '邮箱地址不能为空'
                },
                emailAddress: {
                    message: '邮箱地址格式有误'
                }
            }
        },
        password: {
            message: '密码验证失败',
            validators: {
                notEmpty: {
                    message: '密码不能为空'
                },
                stringLength: {
                    min: 8,
                    max: 20,
                    message: '长度必须在8~20位之间'
                },
                different: {
                    field: 'username',
                    message: '密码不能和用户名相同'
                },
                regexp: {
                    regexp: /^[a-zA-Z0-9_]+$/,
                    message: '密码只能包含英文大小写字母、数字和下划线'
                }
            }
        },
        confirm_password: {
            message: '密码确认失败',
            validators: {
                notEmpty: {
                    message: '两次密码不一致'
                },
                identical: {
                    field: 'password',
                    message: '两次密码不一致'
                },
            }
        },
        code: {
            message: '邀请码格式错误',
            validators: {
                notEmpty: {
                    message: '邀请码不能为空'
                },
                regexp: {
                    regexp: /^([0-9]{4,6}-[A-Z]{6,8}-[0-9]{3,6}[1-9])|test$/,
                    message: '邀请码格式错误'
                }
            }
        }
    }
}