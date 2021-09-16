import Vue from 'vue'
import vueRouter from 'vue-router'

/* import home from 'views/home'
import cart from 'views/cart'
import self from 'views/self'
import shop from 'views/shop' */
const home = ()=> import('views/home')
const cart = ()=> import('views/cart')
const self = ()=> import('views/self')
const shop = ()=> import('views/shop')

Vue.use(vueRouter)

const routes = [
    {
        path: '',
        redirect: 'home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/cart',
        component: cart
    },
    {
        path: '/shop',
        component: shop
    },
    {
        path: '/self',
        component: self
    },
]
const router = new vueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active',
    linkExactActiveClass: 'activeexact'
})
export default router