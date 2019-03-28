<template>
    <div class="my-prize">
        <ul>
            <li>
                <div class="li-top">
                    <div class="img">
                        <img src="" alt="">
                    </div>
                    <div class="desc">
                        <p class="desc-top">红小胖同款加菲猫活体 纯种异国短毛猫宠物猫咪猫咪猫咪猫咪滑板鞋</p>
                        <!--<p class="desc-bottom">2只装 黑色+白色   数量：1</p>-->
                    </div>
                </div>
                <div class="li-bottom">
                    <div class="prize-name">
                        <span>奖品名称：</span>
                        <span>每日狂欢(精美小饰品)</span>
                    </div>
                    <div class="prize-time">
                        <span>兑奖时间：</span>
                        <span>幸运大转盘(精美小饰品)</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "prize",
        data(){
            return{

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../style/vars";
    .my-prize{
        ul{
            li{
                padding: 15px 28px 15px 15px;
                .li-top{
                    display: flex;
                    .img{
                        width: 95px;
                        height: 80px;
                        border-radius: 3px;
                        img{
                            width: 100%;
                            height: 100%;
                            overflow: hidden;
                        }
                    }
                    .desc{
                        margin-left: 11px;
                        .desc-top{
                            font-size: 12px;
                            line-height: 18px;
                            color: $black2;
                        }
                        .desc-bottom{
                            font-size: 11px;
                            color: $black4;
                            line-height: 35px;
                        }
                    }
                }
                .li-bottom{
                    font-size: 15px;
                    line-height: 35px;
                    color: $black2;
                    .prize-name{
                        span{
                            &:last-child{
                                font-size: 13px;
                                color: $yellow1;
                            }
                        }
                    }
                    .prize-time{
                        span{
                            &:last-child{
                                font-size: 13px;
                                color: $black4;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
