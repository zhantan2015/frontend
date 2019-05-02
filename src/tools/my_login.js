import sha256_digest from '../tools/my_sha256'

export default function (data, register, callback) {
    data.pwd_256 = sha256_digest(data.password);
    delete data.password;
    console.log(data);
    register = register ? 'register' : 'login';
    let url = '//192.168.1.102/' + register;
    $.post(url, data, callback)
}