<template>
  <!-- 简易版轮播图，使用transform来实现图片的偏移 -->
  <div class="swiper">
    <div class="continer">
      <div
        class="swiper-content"
        :style="`transform: translateX(-${moveX}00%);`"
      >
        <img src="@/assets/img-1.jpg" alt="" />
        <img src="@/assets/img-2.jpg" alt="" />
        <img src="@/assets/img-3.jpg" alt="" />
      </div>
      <!-- 左右箭头 -->
      <div class="arrow-content">
        <div class="left-arrow" @click="moveLeft()">&lt;</div>
        <div class="right-arrow" @click="moveRight()">&gt;</div>
      </div>
      <!-- 指示器 -->
      <div class="point">
        <span :class="[active == '0' ? 'active' : '']"></span>
        <span :class="[active == '1' ? 'active' : '']"></span>
        <span :class="[active == '2' ? 'active' : '']"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      moveX: 0, //每次移动的偏移位置
      active: 0, //当前的指示器
      now: 0, //标记此时图片的偏移是否已经到了图片的首张或者末张，0-首张 2-末张
      swiperListNode: []
    };
  },
  created() {},

  mounted() {
    this.init();
  },

  methods: {
    // 左移
    moveLeft() {
      console.log("左移");
    },
    // 右移
    moveRight() {
      console.log("右移");
      if (this.now === 0) {
        thismoveX++;
      } else {
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.swiper {
  .continer {
    position: relative;
    width: 500px;
    height: 300px;
    overflow: hidden;
    margin: 20px auto;
    .swiper-content {
      width: 500px;
      height: 300px;
      position: relative;
      display: flex;
      transition: 0.5s;
    }
    .swiper-content:hover + .arrow-content {
      display: block;
    }
    .arrow-content {
      display: none;
    }
    .arrow-content:hover {
      display: block;
    }
    .left-arrow {
      width: 40px;
      height: 40px;
      color: #fff;
      position: absolute;
      bottom: 130px;
      left: 20px;
      line-height: 40px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .right-arrow {
      width: 40px;
      height: 40px;
      color: #fff;
      position: absolute;
      bottom: 130px;
      right: 20px;
      line-height: 40px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .point {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      span {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        margin: 0 5px;
        border: 1px #fff solid;
      }
      .active {
        background-color: #fff;
      }
    }
    img {
      width: 500px;
      height: 300px;
    }
  }
}
</style>
