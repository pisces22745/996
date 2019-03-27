<template>
    <div class="pay-success">
        <div class="pay-info">
            <p>
                <i class="iconfont icon-gou"></i>
                <span>支付成功</span>
            </p>
            <p class="real-pay">实付金额￥{{zhifujine}}</p>
            <div>
                <router-link to="/" class="button sm button-default is-plain">返回商城</router-link>
                <router-link :to="{path:'/order_list',query:{id}}" class="button button-default sm is-plain">查看详情
                </router-link>
            </div>
        </div>
        <good-list title="热卖专区" :goodList="goodList" :dark="true"/>
    </div>
</template>

<script>
    import GoodList from '@/components/Goods'

    export default {
        name: 'success',
        data() {
            return {
                zhifujine: 123,
                id: 1,
                goodList: [{
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
        components: {
            GoodList
        }
    }
</script>

<style lang="scss">
    @import "../../style/vars";

    .pay-success {
        font-size: 13px;
        text-align: center;
        color: $black3;
        .pay-info {
            padding: 30px;
            background-color: $yellow3;
            p:first-child, .iconfont {
                font-size: 20px;
            }
            .real-pay {
                padding: 11px 0 18px;
            }
            .icon-gou {
                margin-right: 8px;
                color: $white;
            }
        }
        .button {
            width: 87px;
            &:first-child {
                margin-right: 56px;
            }
        }
    }
</style>
