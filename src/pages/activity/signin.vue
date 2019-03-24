<template>
    <div class="sign-in">
        <div class="top">
            <div class="title">
                <span class="jie">JIE.</span>
                <span>积分兑换商品敬请期待</span>
            </div>
            <div class="toggle-instruction">
                <span>签到说明</span>
                <i class="iconfont icon-youjiantou"></i>
            </div>
            <div class="sign-in-wrapper">
                <ul class="sign-in-list">
                    <li v-for="(item,index) in signInList" :key="index">
                        <div v-if="item===1" class="signed">
                            <span>+2</span>
                            <span>积分</span>
                        </div>
                        <div v-else class="not-signed">
                            <i class="icon icon-gift"></i>
                        </div>
                        <p>{{index+1}}天</p>
                    </li>
                </ul>
                <div class="clearfix">
                    <div class="fl">
                        <i class="icon icon-diamond"></i>
                        <span class="label">我的积分</span>
                        <ul>
                            <li v-for="(num,index) in integration" :key="index">
                                <span>{{num}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="fr">已累计签到{{countSignIn}}天</div>
                </div>
            </div>
        </div>
        <good-list title="热卖专区" :goodList="hotSaleList"/>
    </div>
</template>

<script>
    import GoodList from '@/components/Goods'

    export default {
        name: 'signIn',
        data() {
            return {
                integrationNum: 12,
                signInList: [1, 1, 0, 0, 0, 0, 0],
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
        computed: {
            integration() {
                let string = this.integrationNum + ''
                let length = string.length
                let arr = string.split('')
                if (length <= 4) {
                    for (let i = 0; i < 4 - length; i++) {
                        arr.unshift('0')
                    }
                }

                return arr
            },
            countSignIn() {
                let count = 0
                this.signInList.forEach(item => {
                    count = item === 1 ? ++count : count
                })
                return count
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

    .sign-in {
        background-color: $black9;
        .top {
            position: relative;
            padding: 17px 15px 0;
            color: $black3;
            .title {
                margin-bottom: 25px;
                span {
                    font-size: 17px;
                }
                .jie {
                    font-size: 25px;
                }
            }
            .toggle-instruction {
                position: absolute;
                top: 15px;
                right: 0;
                height: 30px;
                line-height: 30px;
                padding: 0 8px 0 23px;
                text-align: center;
                border-top-left-radius: 30px;
                border-bottom-left-radius: 30px;
                font-size: 11px;
                background-color: rgba(255, 255, 255, .5);
                span, i {
                    vertical-align: middle;
                }
            }
            .sign-in-wrapper {
                padding: 10px 10px 15px;
                border-radius: 3px;
                background-color: $white;
                .sign-in-list {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    font-size: 10px;
                    li {
                        & > div {
                            width: 32px;
                            height: 40px;
                            text-align: center;
                            color: $white;
                            overflow: hidden;
                            &.signed {
                                background-color: $black10;
                            }
                            &.not-signed {
                                background-color: $yellow1;
                            }
                            span {
                                display: block;
                                &:first-child {
                                    font-size: 17px;
                                    margin: 5px 0 2px;
                                }
                            }
                            i {
                                display: block;
                                width: 18px;
                                height: 18px;
                                background-color: #333333;
                                margin: 11px auto;
                            }
                        }
                        p {
                            margin-top: 5px;
                            text-align: center;
                        }
                    }
                }
                .clearfix {
                    margin-top: 14px;
                    i, span, ul {
                        display: inline-block;
                        vertical-align: middle;
                        color: $yellow1;
                    }
                    i {
                        width: 16px;
                        height: 16px;
                        margin-right: 5px;
                        background-color: #333333;
                    }
                    ul {
                        height: 25px;
                        li {
                            position: relative;
                            width: 15px;
                            height: 25px;
                            margin-right: 5px;
                            display: inline-block;
                            font-size: 15px;
                            span {
                                position: absolute;
                                top: 50%;
                                left: 50%;
                                transform: translate(-50%, -50%);
                                z-index: 4;
                            }
                            &::before, &::after {
                                content: '';
                                position: absolute;
                                display: inline-block;
                                width: 100%;
                            }
                            &::before {
                                height: 12px;
                                top: 0;
                                left: 0;
                                background-color: $yellow4;
                            }
                            &::after {
                                height: 13px;
                                bottom: 0;
                                left: 0;
                                background-color: $yellow5;
                            }
                        }
                    }
                    .label {
                        margin-right: 5px;
                        font-size: 14px;
                    }
                    .fr {
                        padding: 6px;
                        background-color: $black7;
                        font-size: 13px;
                    }
                }
            }
        }
    }
</style>
