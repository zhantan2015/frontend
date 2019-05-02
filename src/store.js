import Vuex from 'vuex'

export default new Vuex.Store({
    state: {
        articles: undefined,
        article: undefined,
        comments: undefined,
        active_tab: undefined,
    },
    getters: {
        get_articles(state) {
            return state.articles
        },
        get_article(state) {
            return state.article
        }
    },
    mutations: {
        set_articles(state, articles) {
            state.articles = articles
        },
        set_article(state, article) {
            state.article = article
        },
        set_comments(state, comments) {
            state.comments = comments
        },
        set_active_tab(state, active_tab) {
            state.active_tab = active_tab
        }
    }
})