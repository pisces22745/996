<template>
    <div class="my-order">
        <!--<appHead :title="'我的订单'"></appHead>-->
        <div class="bar">
            <cube-tab-bar
                    v-model="selectedLabelSlots"
                    show-slider
                    inline
                    @click="clickHandler">
                <cube-tab v-for="item in tabs" :label="item.label" :key="item.label">
                    <!-- name为icon的插槽 -->
                    <i slot="icon" :class="item.icon"></i>
                    <!-- 默认插槽 -->
                    {{item.label}}
                </cube-tab>
            </cube-tab-bar>
        </div>
        <ul>
            <li class="order-card">
                <div class="order-card-top">
                    <div class="order-card-top-content">
                        <div class="img">
                            <img :src="banner" alt="">
                        </div>
                        <div class="content">
                            <p class="pro-desc">【限时7折】多美洁Tropiclean
                                天然清新口气 饮水添加剂...</p>
                            <p class="num-color">2只装 黑色+白色</p>
                        </div>
                        <div class="right-text">
                            <p class="status">交易成功</p>
                            <p class="unit-price">￥<i>125.0</i></p>
                            <p class="num">*<i>1</i></p>
                        </div>
                    </div>
                    <p class="desc">共一件商品 合计：<span>￥：<i>125.0</i></span></p>
                </div>
                <div class="order-card-bottom">
                    <span class="logistics-number">物流编号:<i>20171224526879</i></span>
                    <div class="button">
                        再次购买
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    // import appHead from '@/components/appHead.vue'
    export default {
        name: "index",
        data () {
            return {
                banner: 'http://pic13.nipic.com/20110306/2804945_123841419000_2.jpg',
                selectedLabelSlots: '全部',
                tabs: [{
                    label: '全部',
                    // icon: 'cubeic-home'
                }, {
                    label: '待付款',
                    // icon: 'cubeic-like'
                }, {
                    label: '待发货',
                    // icon: 'cubeic-vip'
                }, {
                    label: '待收货',
                    // icon: 'cubeic-person'
                }]
            }
        },
        methods: {
            // clickHandler (label) {
            // if you clicked home tab, then print 'Home'
            // console.log(label)
            // }
        },
        components:{
            // appHead
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../style/vars";
    .my-order{
        .bar{
            padding: 10px 13px 0 13px;
            .cube-tab{
                padding-bottom:12px ;
                font-size: 15px;
                color: $black11;
            }
        }
        ul{
            padding: 10px 15px;
            .order-card{
                background-color: $white;
                border-radius: 6px;
                .order-card-top{
                    padding: 17px 11px 15px 10px;
                    border-bottom: 1px solid $black12;
                    .order-card-top-content{
                        display: flex;
                        flex: 1;
                        .img{
                            width: 95px;
                            height: 110px;
                            border-radius: 3px;
                            img{
                                width: 100%;
                                height: 100%;
                                overflow: hidden;
                            }
                        }
                        .content{
                            margin-left: 10px;
                            padding-top: 26px;
                            .pro-desc{
                                padding-left: 2px;
                                width: 160px;
                                font-size: 12px;
                                line-height: 18px;
                            }
                            .num-color{
                                margin-top: 7px;
                                font-size: 11px;
                            }
                        }
                        .right-text{
                            text-align: right;
                            .status{
                                color: $yellow7;
                                font-size: 13px;
                            }
                            .unit-price{
                                margin-top: 17px;
                                font-size: 12px;
                            }
                            .num{
                                margin-top: 10px;
                                font-size: 12px;
                            }
                        }
                    }
                    .desc{
                        text-align: right;
                        font-size: 13px;
                        color: $black2;
                        i{
                            font-size: 15px;
                            color: $red2;
                        }
                    }
                }
                .order-card-bottom{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    height: 45px;
                    padding: 0 10px;
                    .logistics-number{
                        font-size: 13px;
                        color: $black2;
                    }
                    .button{
                        box-sizing: border-box;
                        border-radius: 13px;
                        width: 70px;
                        height: 25px;
                        border: 1px solid $black8;
                        font-size: 10px;
                        color: $black3;
                    }
                }
            }
        }
    }
</style>
