<template>
  <div class="main-box">
    <Carousel />
    <Recommended />
    <Exclusive />
    <Newsong />
    <RecommendedMC />
  </div>
</template>

<script>
import Carousel from "@/components/gexingtuijian/Carousel.vue";
import Recommended from "@/components/gexingtuijian/Recommended.vue";
import Exclusive from "@/components/gexingtuijian/Exclusive.vue";
import Newsong from "@/components/gexingtuijian/Newsong.vue";
import RecommendedMC from "@/components/gexingtuijian/RecommendedMV.vue";

export default {
  components: {
    Carousel,
    Recommended,
    Exclusive,
    Newsong,
    RecommendedMC,
  },
};
</script>

<style lang="less" scoped>
.main-box {
  width: 1160px;
  mix-width: 765px;
  margin: 0 auto;
}
</style>
