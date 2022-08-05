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
      now: 0 //标记此时图片的偏移是否已经到了图片的首张或者末张，0-首张 2-末张
    };
  },
  created() {},

  mounted() {
    this.interval = setInterval(() => {
      this.moveTo();
    }, 2000);
  },

  methods: {
    /**
     * @description 移动
     */
    moveTo() {
      // 默认图片从首张开播，图片正向轮播，判断是否播到了末张，若播到了末张则进行标记now=2
      if (this.now === 0) {
        this.moveX++;
        if (this.moveX === 2) {
          this.now = 2;
        }
      } else if (this.now === 2) {
        //如果此时从末张开播，图片偏移-1，判断是否播到了首张，是则标记now=1
        this.moveX--;
        if (this.moveX === 0) {
          this.now = 0;
        }
      }
      // 指示器变化
      this.active = this.moveX;
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
