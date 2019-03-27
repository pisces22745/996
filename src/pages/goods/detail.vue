<template>
    <div class="good-detail">
        <cube-slide ref="slide" :data="items" @change="changePage">
            <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
                <a :href="item.url">
                    <img :src="item.image">
                </a>
            </cube-slide-item>
        </cube-slide>
        <div class="product-info">
            <p class="unit-price">￥<i class="unit-price-num">268</i></p>
            <div class="stock-legend">
                <span>剩余<i class="residue">100</i>件</span>
                <span class="freight-status">包邮</span>
            </div>
        </div>
        <div class="product-name">
            Beats Powerbeats3 Wireless 无线耳机蓝牙运动入耳式耳机
        </div>
        <div class="product-desc">
            <div class="product-specifications" @click="togglePopup(1)">
                产品规格
                <i class="iconfont icon-sangedian"></i>
            </div>
            <div class="product-parameter" @click="togglePopup(2)">
                产品参数
                <i class="iconfont icon-sangedian"></i>
            </div>
        </div>
        <!--<div class="mask" v-if="flag"></div>-->
        <bottom-popup @popupClick="togglePopup" buttonText="确定" v-if="productInfoFlag">
            <div class="bottom-product-specifications" v-if="popType===2">
                <div class="title">
                    产品参数
                    <i class="iconfont icon-cha" @click="togglePopup"></i>
                </div>
                <ul class="content">
                    <li v-for="(item,index) in productInfoList" :key="index">
                        <div class="item">
                            <span class="desc">{{item.desc}}</span>
                            <span class="val">{{item.val}}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="" v-if="popType===1">
                <div class="title">
                    产品参数
                    <i class="iconfont icon-cha" @click="togglePopup"></i>
                </div>
                <ul class="content">
                    <li v-for="(item,index) in productInfoList" :key="index">
                        <div class="item">
                            <span class="desc">{{item.desc}}</span>
                            <span class="val">{{item.val}}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </bottom-popup>
    </div>
</template>

<script>
    import BottomPopup from '@/components/BottomPopup'

    export default {
        name: "detail",
        components: {BottomPopup},
        data() {
            return {
                productInfoFlag: false,
                popType: 1,
                flag: false,
                productInfoList: [
                    {
                        desc: '商品编号',
                        val: '12881990347'
                    },
                    {
                        desc: '佩戴方式',
                        val: '后绕式'
                    },
                    {
                        desc: '品牌',
                        val: 'Beats'
                    },
                    {
                        desc: '频响范围',
                        val: '兼容IOS系统'
                    }
                ],
                items: [
                    {
                        url: 'http://www.didichuxing.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
                    },
                    {
                        url: 'http://www.didichuxing.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
                    },
                    {
                        url: 'http://www.didichuxing.com/',
                        image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
                    }
                ]
            }
        },
        methods: {
            togglePopup(type) {
                this.popType = type
                this.productInfoFlag = !this.productInfoFlag
            },
            popupProSpe() {
                this.flag = !this.flag;

            },
            changePage(current) {
                window.console.log('当前轮播图序号为:' + current)
            },
            clickHandler(item, index) {
                window.console.log(item, index)
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import "../../style/vars";

    .good-detail {
        .product-info {
            padding: 15px 15px 10px 15px;
            background-color: $white;
            height: 65px;
            box-sizing: border-box;

            .unit-price {
                font-size: 20px;
                color: $red1;
            }

            .stock-legend {
                font-size: 12px;
                margin-top: 8px;
                color: $black4;

                .freight-status {
                    margin-left: 50px;
                }
            }
        }

        .product-name {
            padding: 11px 17px 10px 15px;
            background-color: $white;
            color: $black2;
            font-size: 16px;
            line-height: 20px;
            font-weight: 700;
        }

        .product-desc {
            margin-top: 5px;

            .product-specifications, .product-parameter {
                height: 50px;
                padding: 0 15px;
                display: flex;;
                align-items: center;
                justify-content: space-between;
                font-size: 15px;
                color: $black2;
                background-color: $white;

                i {
                    color: $black4;
                }
            }
        }

        .mask {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: $black1;
            opacity: 0.5;
        }

        .bottom-product-specifications {
            height: 500px;

            .title {
                position: relative;
                height: 65px;
                line-height: 65px;
                font-size: 15px;
                color: $black2;
                text-align: center;

                .icon-cha {
                    position: absolute;
                    right: 15px;
                }
            }

            ul {
                padding: 0 15px;

                li {
                    position: relative;
                    height: 50px;
                    line-height: 50px;

                    .desc {
                        font-size: 15px;
                        color: $black4;
                    }

                    .val {
                        position: absolute;
                        left: 90px;
                        top: 3px;
                        font-size: 15px;
                        color: $black2;
                    }
                }
            }

            .button {
                position: absolute;
                bottom: 0;
                height: 50px;
                line-height: 50px;
                text-align: center;
                width: 100%;
                box-sizing: border-box;
                background-color: $yellow3;
                border-radius: 0;
                font-size: 17px;
                color: $black2;
            }
        }
    }
</style>
