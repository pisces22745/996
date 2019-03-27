<template>
    <div class="address-list-wrapper">
        <ul class="address-list">
            <li v-for="(item,index) in addressList" :key="index">
                <div class="top">
                    <div>
                        <span class="name">{{item.name}}</span>
                        <span class="mobile">{{item.mobile}}</span>
                    </div>
                    <p>{{item.province+item.city+item.area+item.address}}</p>
                </div>
                <div class="bottom">
                    <div @click="setDefault(item.id, item.isDefault)">
                        <i class="iconfont" :class="item.isDefault===1?'icon-gou':'icon-yuanquanweixuanfuben'"></i>
                        <span>设为默认</span>
                    </div>
                    <ul>
                        <li @click="goDetail(item.id)">
                            <i class="iconfont icon-bianji"></i>
                            <span>编辑</span>
                        </li>
                        <li @click="delAddress(item.id)">
                            <i class="iconfont icon-delete"></i>
                            <span>删除</span>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
        <button class="button xl button-primary" @click="goDetail()">添加</button>
    </div>
</template>

<script>

    export default {
        name: 'address_list',
        data() {
            return {
                addressList: [{
                    id: 1,
                    name: '羊羊羊',
                    mobile: '18090909090',
                    province: '浙江省',
                    city: '杭州市',
                    area: '桐庐县',
                    address: 'xxxxxx',
                    isDefault: 0
                }, {
                    id: 1,
                    name: '羊羊羊',
                    mobile: '18090909090',
                    province: '浙江省',
                    city: '杭州市',
                    area: '桐庐县',
                    address: 'xxxxxx',
                    isDefault: 1
                }, {
                    id: 1,
                    name: '羊羊羊',
                    mobile: '18090909090',
                    province: '浙江省',
                    city: '杭州市',
                    area: '桐庐县',
                    address: 'xxxxxx',
                    isDefault: 1
                }],
            }
        },
        methods: {
            goDetail(id) {
                this.$router.push({
                    path: 'address_detail',
                    query: {id}
                })
            },
            setDefault(id, isDefault) {
            },
            delAddress(id) {
            }
        },
        mounted() {

        }
    }
</script>

<style lang="scss">
    @import "../../../style/vars";

    .address-list-wrapper {
        .address-list {
            padding: 10px 14px;
            color: $black2;
            & > li {
                margin-bottom: 10px;
                background-color: $white;
                border-radius: 4px;
                font-size: 13px;
                .top {
                    padding: 15px;
                    border-bottom: 1px solid $black12;
                    .name {
                        margin-right: 10px;
                    }
                    p {
                        margin-top: 4px;
                        color: $black3;
                    }
                }
                .bottom {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 15px;
                    .iconfont {
                        font-size: 21px;
                        &.icon-gou {
                            color: $yellow1;
                        }
                    }
                    i, span {
                        vertical-align: middle;
                    }
                    li {
                        display: inline-block;
                        &:first-child {
                            margin-right: 18px;
                        }
                    }
                }
            }
        }
        button {
            position: fixed;
            bottom: 0;
            width: 100%;
        }
    }
</style>
