import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function _import(name) {
  return () => import(`@/components/${name}/${name}.vue`)
}


export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '*',
      redirect: '/goods'
    },
    {
      path: '/goods',
      name: 'goods',
      component: _import('goods'),
      meta: {
        title: '商品'
      }
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: _import('ratings'),
      meta: {
        title: '评论'
      }
    },
    {
      path: '/seller',
      name: 'seller',
      component: _import('seller'),
      meta: {
        title: '商家'
      }
    }
  ]
})