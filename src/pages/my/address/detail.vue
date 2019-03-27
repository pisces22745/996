<template>
    <div class="address-detail">
        <cube-form
                :model="model"
                :schema="schema"
                :immediate-validate="false"
                :options="options"
                @validate="validateHandler"
                @submit="submitHandler"></cube-form>
        <button class="button button-primary xl" @click="submitHandler">保存</button>
    </div>
</template>

<script>
    import cascadeData from './area'
    import {regCollection} from '../../../utils/util'

    export default {
        name: 'address_detail',
        data() {
            return {
                cascadePicker: [],
                addressInfo: {},
                validity: {},
                valid: undefined,
                model: {
                    name: '',
                    mobile: '',
                    area: '',
                    address: '',
                    switchValue: true
                },
                schema: {
                    groups: [{
                        legend: '',
                        fields: [{
                            type: 'input',
                            modelKey: 'name',
                            label: '收货人',
                            props: {
                                placeholder: '名字'
                            },
                            rules: {
                                required: true
                            },
                            // validating when blur
                            trigger: 'blur'
                        }, {
                            type: 'input',
                            modelKey: 'mobile',
                            label: '手机号码',
                            props: {
                                placeholder: '请输入手机号码'
                            },
                            rules: {
                                required: true,
                                pattern: regCollection.mobileReg
                            },
                            // validating when blur
                            trigger: 'blur'
                        }, {
                            type: 'input',
                            modelKey: 'area',
                            label: '所在地区',
                            props: {
                                placeholder: '请输入',
                                readonly: true
                            },
                            events: {
                                focus: () => {
                                    this.openPicker()
                                }
                            },
                            rules: {
                                required: true
                            },
                            // validating when blur
                            trigger: 'blur'
                        }, {
                            type: 'input',
                            modelKey: 'address',
                            label: '详细地址',
                            props: {
                                placeholder: '街道门牌信息'
                            },
                            rules: {
                                required: true
                            },
                            // validating when blur
                            trigger: 'blur'
                        }]
                    }, {
                        legend: '',
                        fields: [{
                            type: 'switch',
                            modelKey: 'switchValue',
                            label: '设为默认地址'
                        }]
                    }]
                },
                options: {
                    scrollToInvalidField: true,
                    layout: 'standard' // classic fresh
                }
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
                this.model.area = selectedText.join(' ')
            },
            openPicker() {
                this.cascadePicker.show()
            },
            closePicker() {
                this.cascadePicker.hide()
            },
            submitHandler(e) {
                e.preventDefault()
                // console.log('submit', this.model)

            },
            validateHandler(result) {
                this.validity = result.validity
                this.valid = result.valid
                // console.log('validity', result.validity, result.valid, result.dirty, result.firstInvalidFieldIndex)
            }
        },
        mounted() {
            this.initCascadePicker()
        }
    }
</script>

<style lang="scss">
    .address-detail {
        button {
            position: fixed;
            bottom: 0;
            width: 100%;
        }
        span {
            font-size: 14px;
        }
    }
</style>
