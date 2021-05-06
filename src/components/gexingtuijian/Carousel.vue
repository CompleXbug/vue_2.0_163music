<template>
  <el-carousel :interval="2000" type="card" height="200px">
    <el-carousel-item v-for="banner in bannersList" :key="banner.targetId">
      <img class="Carouselimg" :src="banner.imageUrl" />
      <div
        class="bannerTypeTitle"
        :style="{
          backgroundColor:
            banner.titleColor == 'red' ? 'rgb(204,74,74)' : 'rgb(74,121,204)',
        }"
      >
        {{ banner.typeTitle }}
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data() {
    return {
      bannersList: [],
    };
  },
  created() {
    this.getBannerList();
  },
  methods: {
    async getBannerList() {
      const { banners: res } = await this.$http.get("/banner");
      // console.log(res);
      //   console.log(banners);is not defined
      this.bannersList = res;
    },
  },
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.el-carousel-item {
  position: relative;
}

.Carouselimg {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.bannerTypeTitle {
  font-size: 15px;
  padding: 0 15px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  border-radius: 5px 0 5px 0;
  color: #fff;
}
</style>
