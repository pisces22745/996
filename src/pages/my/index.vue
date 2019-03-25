<template>
    <div class="my-index">
        <div class="top">
            <div class="info">
                <div class="head-img img-wrapper">
                    <img :src="userInfo.headImg" alt="">
                </div>
                <span class="name">{{userInfo.name}}</span>
                <p class="summary">{{userInfo.summary}}</p>
                <div class="integration">
                    <i class="iconfont icon-jifen"></i>
                    <span class="label">我的贝壳：</span>
                    <span class="red-highlight">{{userInfo.jifen}}</span>
                </div>
            </div>
        </div>
        <div class="order">
            <div class="order-top clearfix">
                <h1 class="fl">我的订单</h1>
                <router-link class="fr" to="/order_list">
                    <span>查看全部</span>
                    <i class="iconfont icon-youjiantou"></i>
                </router-link>
            </div>
            <div class="order-bottom">
                <ul>
                    <li v-for="(item,index) in orderStatusList" :key="index">
                        <router-link :to="item.to">
                            <i class="iconfont" :class="item.icon"></i>
                            <span>{{item.label}}</span>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
        <ul class="menu-list">
            <li v-for="(item,index) in menuList" :key="index" class="clearfix">
                <router-link :to="item.link" class="clearfix">
                    <div class="fl">
                        <i class="iconfont" :class="item.icon"></i>
                        <span>{{item.label}}</span>
                    </div>
                    <i class="iconfont icon-youjiantou fr"></i>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'my-index',
    data () {
        return {
            userInfo: {
                name: '对方正在输入',
                summary: '把生活过的简单点，你就会开心许多',
                jifen: 212,
                headImg: 'http://pic13.nipic.com/20110306/2804945_123841419000_2.jpg'
            },
            orderStatusList: [{
                icon: 'icon-weibiaoti2fuzhi04',
                label: '待付款',
                to: {path: '/order_list', query: {type: 0}}
            }, {
                icon: 'icon-daifahuo',
                label: '待发货',
                to: {path: '/order_list', query: {type: 1}}
            }, {
                icon: 'icon-daishouhuo',
                label: '待收货',
                to: {path: '/order_list', query: {type: 2}}
            }, {
                icon: 'icon-tuihuo',
                label: '退货/售后',
                to: {path: '/order_list', query: {type: 3}}
            }],
            menuList: [{
                icon: 'icon-SevenIcon_iconshouhuodizhi',
                label: '收货地址',
                link: '/address_list'
            }, {
                icon: 'icon-duijiang',
                label: '兑奖记录',
                link: '/cash_prize_list'
            }, {
                icon: 'icon-youhuiquan1',
                label: '优惠券',
                link: '/coupon_list'
            }]
        }
    }
}
</script>

<style lang="scss">
    @import "../../style/vars";

    .my-index {
        .top {
            padding: 78px 25px 0;
            background: url("../../assets/img/my_bg.png") no-repeat top left;
            background-size: 100%;

            .info {
                position: relative;
                margin-bottom: 22px;
                padding: 62px 0 12px;
                text-align: center;
                color: $black3;
                background-color: $white;
                border-radius: 6px;
                box-shadow: 0 2px 0 0 rgba(103, 82, 65, 0.17);

                .head-img {
                    box-sizing: border-box;
                    position: absolute;
                    top: -32px;
                    left: 50%;
                    width: 90px;
                    height: 90px;
                    margin-left: -45px;
                    border-radius: 50%;
                    border: 5px solid rgba(255, 255, 255, .5);
                    overflow: hidden;
                }

                .name {
                    font-size: 14px;
                    color: $black2;
                }

                .summary {
                    margin: 9px 0 12px;
                    font-size: 13px;
                }

                .integration {
                    font-size: 14px;

                    i, span {
                        vertical-align: middle;
                    }

                    .iconfont {
                        display: inline-block;
                        margin-right: 9px;
                        font-size: 18px;
                    }
                }
            }
        }

        .order {
            border-bottom: 5px solid $black7;

            .order-top {
                padding: 0 15px;
                font-size: 15px;

                .fr {
                    span, .iconfont {
                        color: $black4;
                        font-size: 12px;
                    }
                }
            }

            .order-bottom {
                padding: 22px 26px;

                ul {
                    display: flex;
                    justify-content: space-between;

                    li {
                        color: $black4;

                        i, span {
                            display: block;
                            text-align: center;
                        }

                        i {
                            font-size: 22px;
                            margin-bottom: 10px;
                        }

                        span {
                            font-size: 12px;
                        }
                    }
                }
            }
        }

        .menu-list {
            li {
                padding: 10px 15px;
                border-bottom: 1px solid $black7;

                a {
                    display: block;
                }

                .fl {
                    color: $black2;

                    i, span {
                        vertical-align: middle;
                    }

                    i {
                        margin-right: 9px;
                        font-size: 22px;
                    }

                    span {
                        font-size: 13px;
                    }
                }

                .fr {
                    margin-top: 5px;
                }
            }
        }
    }
</style>
