import Vue from 'vue'
import Router from 'vue-router'
// import store from '../store'

Vue.use(Router)
const index = r => require.ensure([], () => r(require('@/pages/goods')), 'goods')
const login = r => require.ensure([], () => r(require('@/pages/login')), 'login')
const register = r => require.ensure([], () => r(require('@/pages/register')), 'register')
const wheel = r => require.ensure([], () => r(require('@/pages/activity/wheel')), 'wheel')
const everyday = r => require.ensure([], () => r(require('@/pages/activity/everyday')), 'everyday')
const signin = r => require.ensure([], () => r(require('@/pages/activity/signin')), 'signin')
const my = r => require.ensure([], () => r(require('@/pages/my')), 'my')
const addressList = r => require.ensure([], () => r(require('@/pages/my/address')), 'addressList')
const order = r => require.ensure([], () => r(require('@/pages/my/order')), 'order')

const routes = [{
    path: '/',
    component: index,
    meta: {
        title: '商城'
    }
}, {
    path: '/login',
    meta: {
        auth: false,
        title: '登录'
    },
    component: login
}, {
    path: '/register',
    component: register,
    meta: {
        title: '注册'
    }
}, {
    path: '/wheel',
    component: wheel,
    meta: {
        title: '幸运大转盘'
    }
}, {
    path: '/everyday',
    component: everyday,
    meta: {
        title: '每日狂欢'
    }
}, {
    path: '/sign_in',
    component: signin,
    meta: {
        title: '每日签到'
    }
}, {
    path: '/my',
    component: my,
    meta: {
        title: '我的'
    }
},{
    path: '/order',
    component: order,
    meta: {
        title: '我的订单'
    }
}, {
    path: '/address_list',
    component: addressList,
    meta: {
        title: '收货地址'
    }
}]

let router = new Router({
    mode: 'history',
    routes,
    strict: process.env.NODE_ENV !== 'production'
})

// router.beforeEach((to, from, next) => {
//     let {auth = true} = to.meta
//     let isLogin = Boolean(store.getters.toke || to.query.token)
//     if (isLogin) {
//         next()
//     } else {
//         if (!auth) {
//             next()
//         } else {
//             next('/login')
//         }
//     }
// })

router.afterEach((transition) => {
    document.title = transition.meta.title || ''
})
export default router
