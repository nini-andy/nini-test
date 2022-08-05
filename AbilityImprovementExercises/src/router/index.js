import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import swiperVersionOne from "@/views/swiper-test/swiper-version-one";
import swiperVersionTwo from "@/views/swiper-test/swiper-version-two";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "swiperVersionOne",
      component: swiperVersionOne
    },
    {
      path: "/swiperVersionTwo",
      name: "swiperVersionTwo",
      component: swiperVersionTwo
    }
  ]
});
