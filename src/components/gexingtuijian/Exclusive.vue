<template>
  <div class="Exc-header">
    <span class="Recom-title">独家放送<i class="el-icon-arrow-right"></i></span>
    <div class="flex-box">
      <div class="Recom" v-for="item in exclusiveList" :key="item.id">
        <div class="Recom-box">
          <img :src="item.picUrl" alt="" />
          <span>{{ item.name }}</span>
          <div class="el-icon-video-play"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      exclusiveList: [],
    };
  },
  created() {
    this.getExclusiveList();
  },
  methods: {
    async getExclusiveList() {
      const data = await this.$http.get(
        "/personalized/privatecontent/list?limit=3&offset=0"
      );
      //   console.log(data);
      this.exclusiveList = data.result;
      // console.log(this.exclusiveList);
    },
  },
};
</script>

<style lang="less" scoped>
.Exc-header {
  margin-top: 20px;
}
.Recom-title {
  font-weight: bold;
  font-size: 20px;
}

.Recom {
  width: 360px;
  height: 240px;
}

.Recom-box {
  font-size: 15px;
  position: relative;
  img {
    height: 130px;
    border-radius: 5px;
    margin-bottom: 5px;
  }
}

.flex-box {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.el-icon-video-play {
  position: absolute;
  top: 5px;
  left: 5px;
  color: #fff;
  font-size: 25px;
}
</style>
