<template>
    <div class="my-order">
        <div class="bar">
            <cube-tab-bar
                    v-model="selectedLabelSlots"
                    show-slider
                    inline
                    @click="clickHandler">
                <cube-tab v-for="item in tabs" :label="item.label" :key="item.label"></cube-tab>
            </cube-tab-bar>
        </div>
        <ul>
            <li class="order-card" v-for="item in orderList">
                <router-link to="/order_detail">
                    <div class="order-card-top">
                        <div class="order-card-top-content">
                            <div class="img">
                                <img :src="item.img" alt="图片">
                            </div>
                            <div class="content">
                                <p class="pro-desc">{{item.desc}}</p>
                                <!--<p class="num-color">2只装 黑色+白色</p>-->
                            </div>
                            <div class="right-text">
                                <p class="status">{{{0:'交易成功',1:'已发货',2:'已收货'}[item.status]}}</p>
                                <p class="unit-price">￥<span>{{item.danjia}}</span></p>
                                <p class="num">*<span>{{item.count}}</span></p>
                            </div>
                        </div>
                        <p class="desc">
                            <span>共{{item.count}}件</span>
                        </p>
                    </div>
                    <div class="order-card-bottom">
                        <div class="logistics-number">
                            <span>物流编号:</span>
                            <span>{{item.wuliubianhao}}</span>
                        </div>
                        <button class="button button-default xs is-plain">再次购买</button>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                orderList: [{
                    img: 'http://pic13.nipic.com/20110306/2804945_123841419000_2.jpg',
                    status: 0,
                    desc: '显示交付到三分反倒龙帆积分老三肯赛浮动额敏',
                    danjia: 125,
                    count: 1,
                    zongjia: 123,
                    wuliubianhao: '4738274',
                    anniuzhi: '确认收货'
                }, {
                    img: 'http://pic13.nipic.com/20110306/2804945_123841419000_2.jpg',
                    status: 0,
                    desc: '显示交付到三分反倒龙帆积分老三肯赛浮动额敏',
                    danjia: 125,
                    count: 1,
                    zongjia: 123,
                    wuliubianhao: '4738274',
                    anniuzhi: '确认收货'
                }, {
                    img: 'http://pic13.nipic.com/20110306/2804945_123841419000_2.jpg',
                    status: 0,
                    desc: '显示交付到三分反倒龙帆积分老三肯赛浮动额敏',
                    danjia: 125,
                    count: 1,
                    zongjia: 123,
                    wuliubianhao: '4738274',
                    anniuzhi: '确认收货'
                }],
                banner: 'http://pic13.nipic.com/20110306/2804945_123841419000_2.jpg',
                selectedLabelSlots: '全部',
                tabs: [{
                    label: '全部',
                }, {
                    label: '待付款',
                }, {
                    label: '待发货',
                }, {
                    label: '待收货',
                }]
            }
        },
        methods: {
            clickHandler(label) {
                window.console.log(label)
            }
        }
    }
</script>

<style lang="scss">
    @import "../../../style/vars";

    .my-order {
        .bar {
            padding: 10px 13px 0 13px;

            .cube-tab {
                padding-bottom: 12px;
                font-size: 15px;
                color: $black11;
            }

            .cube-tab_active {
                color: $red1;
            }

            .cube-tab-bar-slider {
                background-color: $red1;
            }
        }

        ul {
            padding: 10px 15px;

            .order-card {
                background-color: $white;
                border-radius: 6px;
                margin-bottom: 10px;
                .order-card-top {
                    padding: 17px 11px 15px 10px;
                    border-bottom: 1px solid $black12;

                    .order-card-top-content {
                        display: flex;
                        flex: 1;

                        .img {
                            width: 95px;
                            height: 110px;
                            border-radius: 3px;

                            img {
                                width: 100%;
                                height: 100%;
                                overflow: hidden;
                            }
                        }

                        .content {
                            margin-left: 10px;
                            padding-top: 26px;

                            .pro-desc {
                                padding-left: 2px;
                                width: 160px;
                                font-size: 12px;
                                line-height: 18px;
                            }

                            .num-color {
                                margin-top: 7px;
                                font-size: 11px;
                                color: $black3;
                            }
                        }

                        .right-text {
                            text-align: right;

                            .status {
                                color: $yellow7;
                                font-size: 13px;
                            }

                            .unit-price {
                                margin-top: 17px;
                                font-size: 12px;
                                color: $black3;
                            }

                            .num {
                                margin-top: 10px;
                                font-size: 12px;
                                color: $black3;
                            }
                        }
                    }

                    .desc {
                        text-align: right;
                        font-size: 13px;
                        color: $black2;

                        i {
                            font-size: 15px;
                            color: $red2;
                        }
                    }
                }

                .order-card-bottom {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    /*height: 45px;*/
                    padding: 10px;

                    .logistics-number {
                        font-size: 13px;
                        color: $black2;
                    }

                }
            }
        }
    }
</style>
