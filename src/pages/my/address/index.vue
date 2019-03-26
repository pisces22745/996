<template>
    <div class="address-list">
        <ul>
            <li v-for="(item,index) in addressList" :key="index">
                <div class="top">
                    <div>
                        <span>{{item.name}}</span>
                        <span>{{item.mobile}}</span>
                    </div>
                </div>
                <div class="bottom"></div>
            </li>
        </ul>
    </div>
</template>

<script>
    import {provinceList, cityList, areaList} from '@/assets/data/area'
    import cascadeData from './area'

    export default {
        name: 'address_list',
        data() {
            return {
                addressList: [{
                    name: '羊羊羊',
                    mobile: '18090909090',
                }],
                cascadePicker: []
            }
        },
        methods: {
            initCascadePicker() {
                this.cascadePicker = this.$createCascadePicker({
                    data: cascadeData,
                    selectedIndex: [0, 0, 0],
                    onSelect: this.selectHandle
                })
            },
            selectHandle(selectedVal, selectedIndex, selectedText) {
                console.log(selectedText)
            },
            openPicker() {
                this.cascadePicker.show()
            },
            closePicker() {
                this.cascadePicker.hide()
            }
        },
        mounted() {
            this.initCascadePicker()
            this.openPicker()
        }
    }
</script>

<style scoped>

</style>
