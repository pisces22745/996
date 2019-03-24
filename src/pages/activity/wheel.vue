<template>
    <div class="wheel">
        <lucky-wheel :list="prizeList" :index="index" :residueCount="residueCount"></lucky-wheel>
        <div class="winning-list">
            <h1>获奖名单</h1>
            <ul>
                <li v-for="(item,index) in winningList" :key="index">
                    <span>{{item.shijian}}</span>
                    <span class="name">{{item.name}}</span>
                    <span>{{item.jiangpin}}</span>
                </li>
            </ul>
        </div>
        <GoodList title="热卖专区" :goodList="hotSaleList"/>
    </div>
</template>

<script>
    import LuckyWheel from '@/components/LuckyWheel'
    import GoodList from '@/components/Goods'

    export default {
        name: 'wheel',
        data() {
            return {
                prizeList: [],
                index: 0,
                residueCount: 0,
                winningList: [{
                    shijian: '2019-02-25 10:33:33',
                    name: '李女士',
                    jiangpin: '1000积分'
                }, {
                    shijian: '2019-02-25 10:33:43',
                    name: '李女士',
                    jiangpin: '1000积分'
                }, {
                    shijian: '2019-02-25 10:33:43',
                    name: '李女士',
                    jiangpin: '1000积分'
                }],
                hotSaleList: [{
                    img: 'https://img5.duitang.com/uploads/item/201303/09/20130309193622_XYZyt.jpeg',
                    desc: '阿拉斯加雪橇犬简称阿拉斯加',
                    status: 0,
                    price: 138.8
                }, {
                    img: 'https://img5.duitang.com/uploads/item/201303/09/20130309193622_XYZyt.jpeg',
                    desc: '阿拉斯加雪橇犬简称阿拉斯加阿拉斯加雪橇犬简称阿拉斯加阿拉斯加雪橇犬简称阿拉斯加',
                    status: 0,
                    price: 138.8
                }, {
                    img: 'https://img5.duitang.com/uploads/item/201303/09/20130309193622_XYZyt.jpeg',
                    desc: '阿拉斯加雪橇犬简称阿拉斯加',
                    status: 0,
                    price: 138.8
                }]
            }
        },
        components: {
            LuckyWheel,
            GoodList
        }
    }
</script>

<style lang="scss">
    @import "../../style/vars";
    @import "../../style/common";

    .wheel {
        background-color: $red4;
        .winning-list {
            margin: 0 30px;
            padding: 16px 14px;
            border-radius: 5px;
            background-color: $yellow4;
            h1 {
                margin-bottom: 15px;
                padding: 0 20px;
                font-size: 17px;
                line-height: 30px;
                color: $white;
                background: url("../../assets/img/winning_back.png") no-repeat left center;
                background-size: 108px;
            }
            ul {
                li {
                    padding: 0 15px 15px;
                    font-size: 14px;
                    &:last-child {
                        padding-bottom: 0;
                    }
                    .name {
                        margin: 0 6px;
                    }
                }
            }
        }
    }
</style>
