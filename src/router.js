import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/button',
            name: '',
            component: resolve => require(['./views/buttonDemo'], resolve),
            meta: { scrollToTop: true }
        },
        {
            path: '/form',
            name: '',
            component: resolve => require(['./views/formDemo'], resolve),
            meta: { scrollToTop: true }
        },
        {
            path: '/menu',
            name: '',
            component: resolve => require(['./views/menuDemo'], resolve),
            meta: { scrollToTop: true }
        }
    ]
})
