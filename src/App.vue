<template>
    <div id="app">
        <v-header v-bind:seller="seller"></v-header>
        <div class="tab border-1px">
            <div class="tab-item">
                <router-link to="/goods">商品</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/ratings">评论</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/seller">商家</router-link>
            </div>
        </div>
        <keep-alive>
            <router-view :seller="seller"></router-view>
        </keep-alive>
    </div>
</template>

<script>
  import Vheader from '@/components/header/header'

  export default {
    name: 'app',
    data() {
      return {
        seller: {}
      }
    },
    components: {
      'v-header': Vheader
    },
    methods: {},
    created() {
      this.$http.get('/api/data.json').then(res => {
        this.seller = res.data.seller
      })
    },
    mounted() {
    }
  }
</script>

<style lang="scss">
    @import "./common/style/mixin";

    #app {
        .tab {
            display: flex;
            width: 100%;
            height: 40px;
            line-height: 40px;
            font-size: 14px;
            @include border-1px(rgba(7, 17, 27, 0.1));

            .tab-item {
                flex: 1;
                text-align: center;

                & > a {
                    display: block;
                    color: rgb(77, 85, 93)
                }

                & .active {
                    color: rgb(240, 20, 20)
                }
            }
        }
    }
</style>
