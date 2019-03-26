<template>
    <div class="register">
        <div class="input">
            <div class="mobile-phone">
               <i class="iconfont icon-ren"></i>
                <input type="text" placeholder="请输入手机号/邮箱">
            </div>
            <div class="identifying-code">
                <i class="iconfont icon-feidenglu"></i>
                <input type="text" placeholder="请输入验证码">
            </div>
            <div class="password">
                <i class="iconfont icon-icon-test"></i>
                <input type="password" placeholder="请输入密码">
                <i class="iconfont icon-yanjing"></i>
            </div>
        </div>
        <div class="button">
            <button>确认</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'register'
    }
</script>

<style lang="scss" scoped>
    @import '../style/vars';
    .register{
        .input {
            margin: 217px 40px 0 40px;
            background-color: $white;
            .mobile-phone,.identifying-code,.password{
                height: 58px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid $black13;
                .icon-ren,.icon-feidenglu,.icon-icon-test{
                    margin: 0 16px;
                    font-size: 25px;
                    color: $black13;
                }
                .icon-yanjing{
                    color: $black13;
                }
                input{
                    font-size: 13px;
                    color: $black13;
                    width: 70%;
                    border: none;
                    outline: none;
                    color: $black13;
                    padding-right: 20px;
                    box-sizing: border-box;
                }
            }

        }
        .button{
            margin: 63px 33px 0 33px;
            height: 45px;
            button{
                width: 285px;
                height: 100%;
                background-color: $yellow3;
                border-radius: 20px;
                border: none;
                outline: none;
            }
        }
    }

</style>
