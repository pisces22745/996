<template>
    <div class="good-list">
        <h1 v-if="title" :class="{dark}">{{title}}</h1>
        <ul class="clearfix">
            <li v-for="(item,index) in goodList" :key="index" class="clearfix">
                <div class="inner">
                    <div class="img-wrapper">
                        <img :src="item.img" alt="商品图片">
                    </div>
                    <div class="item-bottom">
                        <div class="desc">{{item.desc}}</div>
                        <div class="status clearfix"><span class="fl">{{'限时特惠'}}</span></div>
                        <div class="price">￥{{item.price}}</div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Goods',
    props: {
        title: String,
        goodList: Array,
        dark: Boolean
    }
}
</script>

<style lang="scss">
    @import "../style/vars";

    .good-list {
        padding: 0 5px;

        h1 {
            margin: 15px 0;
            text-align: center;
            color: $yellow6;
            font-size: 17px;

            &.dark {
                color: $black3;
                &::before, &::after {
                    background-image: url("../assets/img/icon_hot_sale2.png");
                }
            }

            &::before, &::after {
                content: '';
                display: inline-block;
                width: 49px;
                height: 12px;
                background-image: url("../assets/img/icon_hot_sale1.png");
                background-size: 100%;
            }

            &::before {
                transform: rotate(-180deg);
                margin-right: 10px;
            }

            &::after {
                margin-left: 10px;
            }
        }

        ul {
            li {
                box-sizing: border-box;
                width: 50%;
                float: left;
                padding: 5px;

                .inner {
                    background-color: $white;

                    .img-wrapper {
                        height: 140px;
                    }

                    .item-bottom {
                        padding: 10px;

                        .desc {
                            font-size: 13px;
                            line-height: 1.3;
                            height: 32px;
                            overflow: hidden;
                            text-overflow: ellipsis; //文本溢出显示省略号
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                        }

                        .status {
                            margin: 10px 0;

                            span {
                                padding: 4px;
                                color: $yellow1;
                                background-color: $yellow5;
                                font-size: 9px;
                            }
                        }

                        .price {
                            font-size: 16px;
                            color: $red1;
                        }
                    }
                }

            }
        }
    }
</style>
