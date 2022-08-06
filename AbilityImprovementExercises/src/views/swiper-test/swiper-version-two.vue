<template>
  <!-- 简易版轮播图，使用transform来实现图片的偏移 -->
  <div class="swiper">
    <div class="continer">
      <div
        :class="['swiper-content', flag ? '' : 'anniation']"
        :style="`transform: translateX(-${moveX}00%);`"
      >
        <img class="img-first" :src="imgList[imgList.length - 1].img" alt="" />
        <img
          class="img"
          v-for="(img, index) in imgList"
          :key="index"
          :src="img.img"
          alt=""
        />
        <img class="img" :src="imgList[0].img" alt="" />
      </div>
      <!-- 左右箭头 -->
      <div class="arrow-content">
        <div class="left-arrow" @click="moveLeft()">&lt;</div>
        <div class="right-arrow" @click="moveRight()">&gt;</div>
      </div>
      <!-- 指示器 -->
      <div class="point">
        <span
          v-for="(item, index) in imgList"
          :key="index"
          :class="[currenIndex === index ? 'active' : '']"
        ></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      moveX: 1, //每次移动的偏移位置
      active: 0, //当前的指示器
      now: 0, //标记此时图片的偏移是否已经到了图片的首张或者末张，0-首张 2-末张
      swiperListNode: [],
      imgList: [
        { img: require("@/assets/img-1.jpg") },
        { img: require("@/assets/img-2.jpg") },
        { img: require("@/assets/img-3.jpg") }
      ],
      flag: false,
      currenIndex: 0
    };
  },
  created() {},

  mounted() {},

  methods: {
    // 左移
    moveLeft() {
      this.moveX--;
      this.currenIndex--;
      if (this.currenIndex < 0) {
        /**
         * 在从复制的最后一张图片的位置上点击左移到倒数第二张图片的位置上过程中主要进行了两步
         * 1、先从复制的最后一张图片的位置上关掉过度效果同时改变偏移位置瞬间回到最后一张图片的位置上，让人视觉上不能发现此时偏移位置已经改变
         * 2、开启过度效果，再次改变偏移位置为倒数第二张图片的位置
         */
        this.moveX = this.imgList.length + 1;
        this.flag = true;
        /**
         * 执行完上面的代码后此时展示的图片实际上已经变为最后一张图片而不是复制的最后一张图片，
         * 这时再开启过度效果，把偏移位置改成倒数第二张图片的位置
         * 延迟是为了防止代码执行过快，没有过度的效果
         */
        setTimeout(() => {
          this.flag = false;
          this.currenIndex = this.imgList.length - 1;
          this.moveX = this.imgList.length;
        }, 50);
      } else {
        this.flag = false;
      }
    },
    // 右移
    moveRight() {
      this.moveX++;
      this.currenIndex++;
      if (this.currenIndex === this.imgList.length) {
        this.moveX = 0;
        this.flag = true;
        // 延迟是防止执行过快，没有展示过度效果
        setTimeout(() => {
          this.flag = false;
          this.currenIndex = 0;
          this.moveX = 1;
        }, 50);
      } else {
        this.flag = false;
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
      .img {
        width: 100%;
        height: 100%;
      }
      .img-first {
        width: 100%;
        height: 100%;
      }
    }
    .anniation {
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
  }
}
</style>
