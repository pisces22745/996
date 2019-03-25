<template>
    <div class="login">
        <div class="input">
            <div class="username">
                <i class="iconfont icon-ren"></i>
                <input type="text" placeholder="请输入账号/用户名">
            </div>
            <div class="password">
                <i class="iconfont icon-icon-test"></i>
                <input type="password" placeholder="请输入密码">
                <i class="iconfont icon-yanjing"></i>
            </div>
        </div>
        <div class="register">立即注册</div>
        <div class="button">
            <button>登录</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login'
    }
</script>

<style lang="scss" scoped>
    @import "../style/vars.scss";
.login{
    .input{
        margin: 227px 40px 0 40px;
        background-color: $white;
        .username{
            display: flex;
            flex: 1;
            align-items: center;
            height: 58px;
            .icon-ren{
                margin: 0 16px;
                font-size: 25px;
                color: $black8;
            }
            input{
                width: 70%;
                font-size: 13px;
                color: $black13;
                outline: none;
                border: none;
                padding-right: 20px;
                box-sizing: border-box;
            }
        }
        .password{
            display: flex;
            flex: 1;
            align-items: center;
            height: 58px;
            .icon-icon-test{
                margin: 0 16px;
                font-size: 25px;
                color: $black8;
            }
            input{
                width: 70%;
                font-size: 13px;
                color: $black13;
                outline: none;
                border: none;
                padding-right: 20px;
                box-sizing: border-box;
            }
            .icon-yanjing{
                color: $black8;
            }
        }
    }
    .register{
        margin: 19px 40px 0 40px;
        text-align: right;
        font-size: 11px;
        color:$black8;
    }
    .button{
        padding: 62px 45px 0 45px;
        height: 40px;
        button{
            background-color: $yellow3;
            width: 285px;
            height: 100%;
            border-radius: 20px;
            border: none;
            outline: none;
            color: $black3;
            font-size: 18px;
        }
    }
}
</style>
