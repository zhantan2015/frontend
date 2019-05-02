import VueRouter from 'vue-router'
import Home from './view/Home'
import Article from './view/Article'
import Picture from './view/Picture'
import Video from './view/Video'
import Music from './view/Music'
import Article_item from './view/Article_item'
import NotFount from './view/Error'
import Login from './view/Login'
import Game from './view/Game'
import JSTest from './view/JSTest'

export default new VueRouter({
    routes: [
        {
            path: '/', name: 'home', component: Home
        }, {
            path: '/article', name: 'article', component: Article
        }, {
            path: '/picture', name: 'picture', component: Picture
        }, {
            path: '/video', name: 'video', component: Video
        }, {
            path: '/music', name: 'music', component: Music
        }, {
            path: '/article/:id(\\d+)', name: 'article_item', component: Article_item
        }, {
            path: '/login', name: 'login', component: Login
        }, {
            path: '/game', name: 'game', component: Game
        }, {
            path: '/jstest', name: 'jstest', component: JSTest
        }
        , {
            path: '*', name: '404', component: NotFount
        }
    ]
})