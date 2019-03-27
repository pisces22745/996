<template>
    <div class="bottom-popup">
        <div class="popup-content">
            <button class="button button-primary xl fix" @click="handleClick">{{buttonText}}</button>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BottomPopup',
        props: {
            buttonText: String
        },
        methods: {
            handleClick() {
                this.$emit('popupClick')
            }
        }
    }
</script>

<style lang="scss">
    @import "../style/vars";

    .bottom-popup {
        position: fixed;
        top: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        .popup-content {
            position: fixed;
            bottom: 0;
            width: 100%;
            background-color: $white;
            z-index: 9;
            .button {
                width: 100%;
            }
        }
    }
</style>
