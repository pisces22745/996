<template>
    <div class="container">
        <div class="lucky-wheel">
            <div class="lucky-title"></div>
            <div class="wheel-main">
                <div class="wheel-pointer-box">
                    <div class="wheel-pointer" @click="rotate_handle()"
                         :style="{transform:rotate_angle_pointer,transition:rotate_transition_pointer}"></div>
                </div>
                <div class="wheel-bg" :style="{transform:rotate_angle,transition:rotate_transition}">
                    <div class="prize-list">
                        <div class="prize-item" v-for="(item,index) in prize_list" :key="index">
                            <div class="prize-pic">
                                <img :src="item.icon">
                            </div>
                            <!--<div class="prize-count" v-if="item.count">-->
                            <!--{{item.count}}-->
                            <!--</div>-->
                            <!--<div class="prize-type">-->
                            <!--{{item.name}}-->
                            <!--</div>-->
                        </div>
                    </div>
                </div>
            </div>
            <!--<div class="lottery_ticket">您还有： <span class="highlight">{{ lottery_ticket}}</span>次抽奖机会</div>-->
        </div>
        <div class="main">
            <div class="main-bg"></div>
            <div class="bg-p"></div>
            <div class="content">
                <div class="lottery_ticket">您还有{{ lottery_ticket}}次抽奖机会</div>
            </div>
            <!--<div class="tip">-->
            <!--<div class="tip-title">活动规则</div>-->
            <!--<div class="tip-content">-->
            <!--<p> 1.每日签到后，即可获得一次幸运大转盘的机会，仅限当天有效，过期作废。 2.金币抽奖，每10个金豆可兑换一次大转盘机会。</p>-->
            <!--<p> 2.金币抽奖，每10个金豆可以兑换一次大转盘抽奖机会</p>-->
            <!--<p> 3.所中金豆或积分到【我的账户】中查询。累计达到100金豆及以上，可以兑换相应奖品</p>-->
            <!--</div>-->
            <!--</div>-->
        </div>
        <cube-popup type="extend-popup" ref="popup">
            <!--<div class="cube-extend-popup-content" @click="hide">-->
            <slot>
                <div class="toast">
                    <div class="toast-container">
                        <img :src="toast_pictrue" v-if="toast_pictrue!==''" class="toast-picture">
                        <div class="close" @click="hidePopup('popup')"></div>
                        <div class="toast-title" v-html="toast_title"></div>
                        <div class="toast-content" v-html="toast_content"></div>
                        <div class="toast-btn">
                            <div class="toast-cancel" :class="hasPrize?'has-prize':'no-prize'" @click="hidePopup('popup')">
                                关闭
                            </div>
                        </div>
                    </div>
                </div>
            </slot>
            <!--</div>-->
        </cube-popup>
        <!--<div class="toast-mask" v-show="toast_control"></div>-->
    </div>
</template>
<script>
    export default {
        data() {
            return {
                easejoy_bean: 0, //金豆
                lottery_ticket: 0, //抽奖次数
                prize_list: [{
                    icon: require("../assets/img/bean_500.png"), // 奖品图片
                    count: 10, // 奖品数量
                    name: "易趣豆", // 奖品名称
                    isPrize: 1 // 该奖项是否为奖品
                }, {
                    icon: require("../assets/img/bean_five.png"),
                    count: 5,
                    name: "豆",
                    isPrize: 1
                }, {
                    icon: require("../assets/img/bean_one.png"),
                    count: 10,
                    name: "易趣豆",
                    isPrize: 1
                }, {
                    icon: require("../assets/img/point_five.png"),
                    count: 5,
                    name: "积分",
                    isPrize: 1
                }, {
                    icon: require("../assets/img/point_ten.png"),
                    count: 10,
                    name: "积分",
                    isPrize: 1
                }, {
                    icon: require("../assets/img/bean_500.png"),
                    count: 10,
                    name: "易趣豆",
                    isPrize: 1
                }, {
                    icon: require("../assets/img/give_up.png"),
                    count: 0,
                    name: "未中奖",
                    isPrize: 0
                }, {
                    icon: require("../assets/img/bean_500.png"),
                    count: 10,
                    name: "易趣豆",
                    isPrize: 1
                }], //奖品列表
                // toast_control: false, //抽奖结果弹出框控制器
                hasPrize: false, //是否中奖
                start_rotating_degree: 0, //初始旋转角度
                rotate_angle: 0, //将要旋转的角度
                start_rotating_degree_pointer: 0, //指针初始旋转角度
                rotate_angle_pointer: 0, //指针将要旋转的度数
                rotate_transition: "transform 6s ease-in-out", //初始化选中的过度属性控制
                rotate_transition_pointer: "transform 12s ease-in-out", //初始化指针过度属性控制
                click_flag: true, //是否可以旋转抽奖
                index: 0
            };
        },
        created() {
            this.init_prize_list();
        },
        computed: {
            toast_title() {
                return this.hasPrize ? "恭喜您，获得" : "很遗憾，未中奖";
            },
            toast_content() {
                if (this.hasPrize) {
                    return `<span class="highlight">${this.prize_list[this.index].count}</span>${this.prize_list[this.index].name}`
                } else {
                    if (this.lottery_ticket === 0) {
                        return '今日抽奖机会为0，请明日再来'
                    } else {
                        return `再来一次吧，您还有${this.lottery_ticket}次机会`
                    }
                }
            },
            toast_pictrue() {
                return this.hasPrize
                    ? require("../assets/img/congratulation.png")
                    : ''
            }
        },
        methods: {
            //此方法为处理奖品数据
            init_prize_list() {
            },
            rotate_handle() {
                this.index = 6  //指定每次旋转到的奖品下标
                this.rotating();
            },
            rotating() {
                if (!this.click_flag) return;
                var type = 0; // 默认为 0  转盘转动 1 箭头和转盘都转动(暂且遗留)
                var during_time = 5; // 默认为1s
                // var random = Math.floor(Math.random() * 7);
                var result_index = this.index; // 最终要旋转到哪一块，对应prize_list的下标
                var result_angle = [337.5, 292.5, 247.5, 202.5, 157.5, 112.5, 67.5, 22.5]; //最终会旋转到下标的位置所需要的度数
                var rand_circle = 6; // 附加多转几圈，2-3
                this.click_flag = false; // 旋转结束前，不允许再次触发
                if (type === 0) {
                    // 转动盘子
                    var rotate_angle =
                        this.start_rotating_degree +
                        rand_circle * 360 +
                        result_angle[result_index] -
                        this.start_rotating_degree % 360;
                    this.start_rotating_degree = rotate_angle;
                    this.rotate_angle = "rotate(" + rotate_angle + "deg)";
                    // // //转动指针
                    // this.rotate_angle_pointer = "rotate("+this.start_rotating_degree_pointer + 360*rand_circle+"deg)";
                    // this.start_rotating_degree_pointer =360*rand_circle;
                    // 旋转结束后，允许再次触发
                    setTimeout(() => {
                        this.click_flag = true
                        this.showPopup('popup')
                    }, during_time * 1000 + 1500); // 延时，保证转盘转完
                } else {
                    //
                }
            },
            showPopup(refId) {
                const component = this.$refs[refId]
                component.show()
            },
            hidePopup(refId) {
                const component = this.$refs[refId]
                component.hide()
            },
            game_over() {
                // this.toast_control = true;
                this.hasPrize = this.prize_list[this.index].isPrize
            },
            //关闭弹窗
            close_toast() {
                // this.toast_control = false;
            }
        }
    };
</script>
<style lang="scss">
    @import "../style/vars";

    .container {
        /*height: 200px;*/
        width: 100%;
        /*background-color: #000;*/
    }

    .lucky-wheel {
        width: 100%;
        height: 505px;
        background: rgb(252, 207, 133) url("../assets/img/color_pillar.png") no-repeat center bottom;
        background-size: 100%;
        padding-top: 27px;
        .lottery_ticket {
            padding: 15px;
            color: $white;
        }
    }

    .lucky-title {
        width: 100%;
        height: 130px;
        background: url("../assets/img/lucky_title.png") no-repeat center top;
        background-size: 100%;
    }

    .wheel-main {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .wheel-bg {
        width: 295px;
        height: 295px;
        background: url("../assets/img/draw_wheel.png") no-repeat center top;
        background-size: 100%;
        color: #fff;
        font-weight: 500;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        transition: transform 3s ease;
    }

    .wheel-pointer-box {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 100;
        transform: translate(-50%, -60%);
        width: 85px;
        height: 85px;
    }

    .wheel-pointer {
        width: 85px;
        height: 85px;
        background: url("../assets/img/draw_btn.png") no-repeat center top;
        background-size: 100%;
        transform-origin: center 60%;
    }

    .wheel-bg div {
        text-align: center;
    }

    .prize-list {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .prize-list .prize-item {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
    }

    .prize-list .prize-item:first-child {
        top: 0;
        left: 133px;
        transform: rotate(20deg);
    }

    .prize-list .prize-item:nth-child(2) {
        top: 45px;
        left: 173px;
        transform: rotate(67deg);
    }

    .prize-list .prize-item:nth-child(3) {
        top: 103px;
        left: 170px;
        transform: rotate(-250deg);
    }

    .prize-list .prize-item:nth-child(4) {
        top: 144px;
        left: 131px;
        transform: rotate(-210deg);
    }

    .prize-list .prize-item:nth-child(5) {
        top: 148px;
        left: 70px;
        transform: rotate(-160deg);
    }

    .prize-list .prize-item:nth-child(6) {
        top: 102px;
        left: 30px;
        transform: rotate(-111deg);
    }

    .prize-list .prize-item:nth-child(7) {
        top: 45px;
        left: 30px;
        transform: rotate(-69deg);
    }

    .prize-list .prize-item:nth-child(8) {
        top: 0;
        left: 72px;
        transform: rotate(-20deg);
    }

    .prize-item {
        width: 94px;
        height: 144px;
    }

    .prize-pic img {
        width: 74px;
        height: 40px;
        margin-top: 40px;
    }

    .prize-count {
        font-size: 14px;
    }

    .prize-type {
        font-size: 12px;
    }

    .main {
        position: relative;
        width: 100%;
        background: $red4;
        /*padding-bottom: 27px;*/
    }

    .main-bg {
        width: 100%;
        height: 105px;
        position: absolute;
        top: -55px;
        left: 0;
        background: url("../assets/img/luck_bg.png") no-repeat center top;
        background-size: 100%;
    }

    .bg-p {
        width: 100%;
        height: 48px;
        background: rgb(252, 207, 133);
    }

    .content {
        position: absolute;
        top: 3px;
        left: 0;
        background: $red4;
        width: 100%;
        height: 48px;
        font-size: 18px;
        color: #ffeb39;
        /*padding-left: 108px;*/
    }

    .content div {
        text-align: center;
    }

    .tip {
        position: relative;
        margin: 40px auto 0;
        width: 280px;
        border: 1px solid #fbc27f;
    }

    .tip-title {
        position: absolute;
        top: -16px;
        left: 50%;
        transform: translate(-50%, 0);
        font-size: 16px;
        color: #fccc6e;
        background: rgb(243, 109, 86);
        padding: 5px 10px;
    }

    .tip-content {
        padding: 25px 10px;
        font-size: 14px;
        color: #fff8c5;
        line-height: 1.5;
    }

    .toast-mask {
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: 10000;
        width: 100%;
        height: 100%;
    }

    .toast {
        position: fixed;
        top: 50%;
        left: 50%;
        z-index: 20000;
        transform: translate(-50%, -50%);
        width: 300px;
        border-radius: 5px;
        background-color: #fff;
        padding: 5px;
        /*background-color: rgb(252, 244, 224);*/
    }

    .toast-container {
        position: relative;
        width: 100%;
        height: 100%;
        /*border: 1px dotted #fccc6e;*/
    }

    .toast-picture {
        position: absolute;
        top: -104px;
        left: 0;
        width: 300px;
        height: 137px;
    }

    .toast-pictrue-change {
        position: absolute;
        top: -24px;
        left: -22px;
        width: 280px;
        height: 50px;
    }

    .toast-title {
        padding: 45px 0 15px;
        font-size: 18px;
        color: #fc7939;
        text-align: center;
    }

    .toast-content {
        margin: 0 0 15px;
        font-size: 12px;
        text-align: center;
    }

    .toast-title .highlight, .toast-content .highlight {
        color: #fc7939;
    }

    .toast-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 15px;
    }

    .toast-btn div {
        width: 180px;
        height: 35px;
        border-radius: 30px;
        text-align: center;
        line-height: 35px;
        color: #fff;
        font-size: 17px;
        &.has-prize {
            background-color: $red1;
        }
        &.no-prize {
            background-color: $yellow1;
        }
    }

    .close {
        position: absolute;
        top: -15px;
        right: -15px;
        width: 32px;
        height: 32px;
        background: url("../assets/img/close_store.png") no-repeat center top;
        background-size: 100%;
    }
</style>

