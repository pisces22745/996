<template>
    <div class="appHead">
        <div class="back"></div>
        {{title}}
    </div>
</template>

<script>
    export default {
        name: "appHead",
        props:{
            title:String
        }
    }
</script>

<style lang="scss" scoped>
    @import "../style/vars";
.appHead{
    position: relative;
    height: 44px;
    background-color: $yellow3;
    text-align: center;
    font-size: 16px;
    line-height: 44px;
    .back{
        position: absolute;
        left: 15px;
        top: 15px;
        border-left: 1px solid $black1;
        border-bottom: 1px solid $black1;
        width: 10px;
        height: 10px;
        transform: rotate(45deg);
    }
}
</style>
