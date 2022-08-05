import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import swiperTest from '@/views/swiper-test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'swiperTest',
      component: swiperTest
    },
  ]
})
