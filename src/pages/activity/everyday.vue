<template>
    <div class="everyday">
        <div class="banner img-wrapper">
            <img :src="banner" alt="顶部banner">
            <div class="toggle-rule">活动规则</div>
        </div>
        <div class="everyday-bottom">
            <div class="activity-list">
                <cube-scroll-nav-bar :current="current" :labels="labels" @change="changeHandler">
                    <div slot-scope="props">
                        <div class="time">{{props.label}}</div>
                        <div>{{props.index===0?'正在参与':'即将开始'}}</div>
                    </div>
                </cube-scroll-nav-bar>
                <ul>
                    <li v-for="(item,index) in activityList" :key="index">
                        <div class="img-wrapper">
                            <img :src="item.img" alt="活动图">
                        </div>
                        <div>
                            <div class="desc">{{item.title}}</div>
                            <div class="progress"></div>
                            <div class="participate clearfix">
                                <div class="fl">
                                    <span>已参与</span>
                                    <span class="highlight">{{item.canyurenshu}}</span>
                                </div>
                                <button class="button fr"
                                        :class="{0:'primary',1:'primary disabled',2:'primary',3:'gray'}[item.status]"
                                        @click="pay">
                                    {{{0: '立即参与',1:'已参与',2:'去兑奖',3:'谢谢参与'}[item.status]}}
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <GoodList title="热卖专区" :goodList="hotSaleList"/>
            <cube-popup type="extend-popup" ref="rule">
                <slot>
                    <div>规则</div>
                </slot>
            </cube-popup>
            <cube-popup type="extend-popup" ref="participateSuccess">
                <slot>
                    <div>参与成功</div>
                </slot>
            </cube-popup>
            <cube-popup type="extend-popup" ref="cashPrize">
                <slot>
                    <div>填写信息</div>
                </slot>
            </cube-popup>
            <cube-popup type="extend-popup" ref="cashPrizeSuccess">
                <slot>
                    <div>兑换成功</div>
                </slot>
            </cube-popup>
            <cube-popup type="extend-popup" ref="cashCountEmpty">
                <slot>
                    <div>今日次数已用完</div>
                </slot>
            </cube-popup>
        </div>
    </div>
</template>

<script>
    import GoodList from '@/components/Goods'

    export default {
        name: 'everyday',
        data() {
            return {
                banner: 'https://img5.duitang.com/uploads/item/201303/09/20130309193622_XYZyt.jpeg',
                current: '10:00',
                labels: [
                    '10:00',
                    '11:00',
                    '12:00',
                    '13:00',
                    '14:00',
                    '15:00',
                    '16:00',
                    '17:00',
                ],
                activityList: [{
                    img: 'http://pic13.nipic.com/20110306/2804945_123841419000_2.jpg',
                    title: '狗狗衣服小型犬 太低情侣装礼服秋冬装猫咪通用款',
                    canyurenshu: 200,
                    status: 0
                }, {
                    img: 'http://pic13.nipic.com/20110306/2804945_123841419000_2.jpg',
                    title: '狗狗衣服小型犬狗狗衣服小型犬狗狗衣服小型犬狗狗衣服小型犬狗狗衣服小型犬 太低情侣装礼服秋冬装猫咪通用款',
                    canyurenshu: 200,
                    status: 0
                }, {
                    img: 'http://pic13.nipic.com/20110306/2804945_123841419000_2.jpg',
                    title: '狗狗衣服小型犬 太低情侣装礼服秋冬装猫咪通用款',
                    canyurenshu: 200,
                    status: 0
                }, {
                    img: 'http://pic13.nipic.com/20110306/2804945_123841419000_2.jpg',
                    title: '狗狗衣服小型犬 太低情侣装礼服秋冬装猫咪通用款',
                    canyurenshu: 200,
                    status: 0
                }],
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
        methods: {
            changeHandler(cur) {
                this.current = cur
            },
            pay() {
                const toast = this.$createToast({
                    time: 0,
                    mask: true,
                    txt: '支付开发中'
                })
                toast.show()
                setTimeout(() => {
                    toast.hide()
                }, 3000)
            }
        },
        components: {
            GoodList
        }
    }
</script>

<style lang="scss">
    @import "../../style/vars";

    .everyday {
        .banner {
            position: relative;
            height: 187px;
            .toggle-rule {
                position: absolute;
                display: block;
                top: 10px;
                right: 0;
                width: 60px;
                height: 23px;
                text-align: center;
                line-height: 23px;
                font-size: 11px;
                color: $white;
                border-top-left-radius: 23px;
                border-bottom-left-radius: 23px;
                background-color: rgba(0, 0, 0, .3);
            }
        }
        .cube-scroll-nav-bar-item {
            padding: 10px 24px;
            color: $black8;
            font-size: 12px;
            .time {
                margin-bottom: 8px;
            }
        }
        .cube-scroll-nav-bar-item_active {
            color: $red1;
        }
        .everyday-bottom {
            background-color: $yellow2;
            .activity-list {
                ul {
                    padding: 15px 15px 0;
                }
                li {
                    position: relative;
                    margin-bottom: 10px;
                    border-radius: 8px;
                    padding: 16px 10px 16px 125px;
                    background-color: $white;
                    font-size: 13px;
                    .img-wrapper {
                        position: absolute;
                        top: 50%;
                        left: 15px;
                        margin-top: -52px;
                        width: 95px;
                        height: 105px;
                        border-radius: 5px;
                        overflow: hidden;
                    }
                    .desc {
                        height: 35px;
                        margin-bottom: 15px;
                        line-height: 1.5;
                        overflow: hidden;
                        text-overflow: ellipsis; //文本溢出显示省略号
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                    }
                    .progress {
                        height: 11px;
                        margin-bottom: 3px;
                    }
                    .participate {
                        span, button {
                            display: table-cell;
                            height: 30px;
                            vertical-align: bottom;
                        }
                    }
                }
            }
        }
    }
</style>
