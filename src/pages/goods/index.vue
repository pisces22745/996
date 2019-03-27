<template>
    <div class="index">
        <div class="banner img-wrapper">
            <img :src="banner" alt="banner图">
        </div>
        <div class="good-list-wrapper">
            <good-list :goodList="goodList" :dark="true" :listDart="true"/>
        </div>
    </div>
</template>

<script>
    import GoodList from '@/components/Goods'

    export default {
        name: 'index',
        data() {
            return {
                banner: 'http://pic13.nipic.com/20110306/2804945_123841419000_2.jpg',
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
        mounted() {

        },
        components: {
            GoodList
        }
    }
</script>

<style lang="scss">
    @import "../../style/vars";

    .index {
        .banner {
            height: 175px;
        }
        .good-list-wrapper {
            background-color: $white;
        }
    }
</style>
