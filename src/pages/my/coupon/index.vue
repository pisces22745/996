<template>
    <div class="coupon">
        <ul>
            <li v-for="coupon in couponList">
                <div class="coupon-title">{{coupon.youhuilidu}}</div>
                <div class="coupon-content">
                    <p class="period-of-validity">
                        <span>有效期：</span>
                        <span>{{coupon.youxiaoqi}}</span>
                    </p>
                    <p class="desc">所有商品适用</p>
                    <button class="button xs button-danger is-plain">立即使用</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'coupon',
    data(){
        return{
            couponList:[
                {
                    youhuilidu:'8折',
                    youxiaoqi:'2019.03.21 - 2019.04.21'
                },
                {
                    youhuilidu:'8折',
                    youxiaoqi:'2019.03.21 - 2019.04.21'
                },
                {
                    youhuilidu:'8折',
                    youxiaoqi:'2019.03.21 - 2019.04.21'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    @import "../../../style/common";
.coupon{
    ul{
        li{
            margin: 10px 15px;
            background-color: $white;
            display: flex;
            border-radius: 4px;
            .coupon-title{
                padding: 0 20px;
                width: 30%;
                box-sizing: border-box;
                color: $red1;
                font-size: 33px;
                line-height: 87px;
                border-right: 1px dashed $black12;
            }
            .coupon-content{
                position: relative;
                /*line-height: 30px;*/
                color: $black3;
                padding: 24px 27px;
                width: 70%;
                .period-of-validity{
                    font-size: 10px;
                    margin-bottom: 12px;
                }
                .desc{
                    font-size: 12px;
                }
                .button{
                    position: absolute;
                    right: 24px;
                    bottom: 12px;
                }
            }
        }
    }
}
</style>
