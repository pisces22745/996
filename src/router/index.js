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
const addressDetail = r => require.ensure([], () => r(require('@/pages/my/address/detail')), 'addressDetail')
const orderList = r => require.ensure([], () => r(require('@/pages/my/order')), 'orderList')
const orderDetail = r => require.ensure([], () => r(require('@/pages/my/order/detail')), 'orderDetail')
const prizeList = r => require.ensure([], () => r(require('@/pages/my/prize')), 'prizeList')

const routes = [{
    path: '/',
    component: index,
    meta: {
        auth: false,
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
}, {
    path: '/order',
    component: orderList,
    meta: {
        title: '我的订单'

    }
}, {
    path: '/address_list',
    component: addressList,
    meta: {
        title: '收货地址'
    }
}, {
    path: '/address_detail',
    component: addressDetail,
    meta: {
        title: '收货地址详情'
    }
}, {
    path: '/detail',
    component: orderDetail,
    meta: {
        title: '收货地址'
    }
}, {
    path: '/prize_list',
    component: prizeList,
    meta: {
        title: '奖品记录'
    }
}, {
    path: '/*',
    redirect: '/everyday'
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
