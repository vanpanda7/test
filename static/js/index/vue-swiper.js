// 注册插件（UMD 版本在全局暴露 VueAwesomeSwiper）
Vue.use(VueAwesomeSwiper);

// 轮播组件
Vue.component('my-swiper', {
  template: `
    <div class="my-swiper-wrap">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="item in imgList" :key="item.id">
          <img :src="item.src" alt="lunbo" style="width:100%;display:block;"/>
        </swiper-slide>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  `,
  data: function() {
    return {
      imgList: [
        { id: 1, src: './static/images/index/lunbo1.png' },
        { id: 2, src: './static/images/index/lunbo2.png' }
      ],
      swiperOptions: {
        // 移除分页配置，避免生成分页元素
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        loop: true,
        autoplay: { delay: 3000, disableOnInteraction: false },
        speed: 600,
        slidesPerView: 1,
        spaceBetween: 0,
      }
    }
  },
  computed: {
    swiper: function() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted: function() {
    // 可进行编程式控制，例如：this.swiper.slideTo(1)
  }
});

// 挂载到页面区域
new Vue({ el: '#vue-swiper' });