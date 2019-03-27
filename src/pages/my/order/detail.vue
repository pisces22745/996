<template>
    <div class="order-detail">
        <div class="good-info">
            <div class="img-wrapper">
                <img :src="orderDetail.img" alt="商品图片">
            </div>
            <div class="desc">
                <p>{{orderDetail.desc}}</p>
            </div>
            <div class="each-info">
                <span>￥{{orderDetail.danjia}}</span>
                <span>*{{orderDetail.count}}</span>
            </div>
            <div class="sum">
                <span>共{{orderDetail.count}}件商品</span>
                <span>合计</span>
                <span class="red-highlight">￥{{orderDetail.zongjia}}</span>
            </div>
        </div>
        <div class="order">
            <div class="order-info">
                <h1>订单信息</h1>
                <p>
                    <span>订单编号:</span>
                    <span>{{orderDetail.dingdanbianhao}}</span>
                </p>
                <p>
                    <span>创建时间:</span>
                    <span>{{orderDetail.chuangjianshijian}}</span>
                </p>
                <p>
                    <span>付款时间:</span>
                    <span>{{orderDetail.fukuanshijian}}</span>
                </p>
                <p>
                    <span>发货时间:</span>
                    <span>{{orderDetail.fahuoshijian}}</span>
                </p>
            </div>
            <ul>
                <li>
                    <i class="iconfont icon-daishouhuo red-highlight"></i>
                    <div>
                        <p>{{orderDetail.dangqiandingdanzhuangtao}}</p>
                        <p>{{orderDetail.shangyiciwuliushijina}}</p>
                    </div>
                    <i class="iconfont icon-youjiantou"></i>
                </li>
                <li>
                    <i class="iconfont icon-SevenIcon_iconshouhuodizhi"></i>
                    <div>
                        <p>
                            <span>{{orderDetail.shoujianren}}</span>
                            <span>{{orderDetail.mobile}}</span>
                        </p>
                        <p>{{orderDetail.dizhi}}</p>
                    </div>
                </li>
            </ul>
        </div>
        <good-list title="热卖专区" :goodList="hotSaleList" :dark="true"/>
    </div>
</template>

<script>
    import GoodList from '@/components/Goods'

    export default {
        name: 'order_detail',
        data() {
            return {
                orderDetail: {
                    img: 'http://pic13.nipic.com/20110306/2804945_123841419000_2.jpg',
                    desc: '父老江森控机房劳动节疯狂减肥了父老江森控机房劳动节疯狂减肥了',
                    danjia: 1300,
                    count: 121,
                    zongjia: 1500,
                    chuangjianshijian: '2015-09-09 09:09:09',
                    fukuanshijian: '2015-09-09 09:09:09',
                    fahuoshijian: '2015-09-09 09:09:09',
                    dangqiandingdanzhuangtao: '杭州发往就疯狂减肥',
                    shangyiciwuliushijina: '2015-09-09 09:09:09',
                    dingdanbianhao: 'fkdlsjf4320432',
                    shoujianren: '囊括',
                    mobile: '1828378383',
                    dizhi: '浙江省杭州市'
                },
                hotSaleList: [{
                    img: 'http://pic13.nipic.com/20110306/2804945_123841419000_2.jpg',
                    desc: '阿拉斯加雪橇犬简称阿拉斯加',
                    status: 0,
                    price: 138.8
                }, {
                    img: 'http://pic13.nipic.com/20110306/2804945_123841419000_2.jpg',
                    desc: '阿拉斯加雪橇犬简称阿拉斯加阿拉斯加雪橇犬简称阿拉斯加阿拉斯加雪橇犬简称阿拉斯加',
                    status: 0,
                    price: 138.8
                }, {
                    img: 'http://pic13.nipic.com/20110306/2804945_123841419000_2.jpg',
                    desc: '阿拉斯加雪橇犬简称阿拉斯加',
                    status: 0,
                    price: 138.8
                }]
            }
        },
        methods: {},
        components: {
            GoodList
        }
    }
</script>

<style lang="scss">
    @import "../../../style/vars";

    .order-detail {
        font-size: 13px;
        .good-info {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 7px;
            padding: 15px;
            background-color: $white;
            .img-wrapper {
                flex: none;
                width: 95px;
                height: 110px;
            }
            .desc {
                padding: 10px;
                color: $black2;
                line-height: 1.4;
            }
            .each-info {
                padding: 10px 0;
                color: $black3;
                span {
                    display: block;
                    margin-bottom: 10px;
                    text-align: right;
                }
            }
            .sum {
                position: absolute;
                bottom: 15px;
                right: 15px;
                color: $black2;
            }
        }
        .order {
            .order-info, li {
                border-bottom: 1px solid $black7;
                background-color: $white;
                color: $black3;
                padding: 15px;
            }
            .order-info {
                h1 {
                    margin-bottom: 15px;
                }
                p {
                    margin-bottom: 10px;
                    span:first-child{
                        margin-right: 20px;
                    }
                }
            }
            li {
                position: relative;
                padding: 16px 50px;
                .iconfont {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    &.icon-daishouhuo, &.icon-SevenIcon_iconshouhuodizhi {
                        left: 16px;
                    }
                    &.icon-youjiantou {
                        right: 16px;
                    }
                }
                p:first-child {
                    margin-bottom: 10px;
                }
            }
        }
    }
</style>
