let url = '//192.168.1.102/ajax';

export default function (callback) {
    let data = {type: 'article'};
    $.get(url, data, callback)
}

export function get_comments(id, callback) {
    let data = {type: 'comment', id: id};
    $.get(url, data, callback)
}

// data => {
//         that.$store.commit('set_articles', JSON.parse(data));
//         if (a) {
//             that.$store.commit('set_article', JSON.parse(data)[that.$route.params.id - 1]);
//             data = {
//                 'type': 'comment',
//                 'id': that.$store.state.article.id,
//             };
//             $.get(url, data, data => {
//                 let comments = JSON.parse(data);
//                 for (let i = 0; i < comments.length; i++) {
//                     if (!comments[i].avatar) {
//                         comments[i].avatar = window.localStorage.getItem('avatar')
//                     }
//                 }
//                 that.$store.commit('set_comments', comments);
//             }