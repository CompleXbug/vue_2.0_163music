<template>
  <div>
    <div class="com-title">推荐MV<i class="el-icon-arrow-right"></i></div>
    <div class="flex-box">
      <div class="RecMv" v-for="item in RecMvList" :key="item.id">
        <img :src="item.picUrl" alt="" />
        <div>
          <span>{{ item.name }}</span> <br />
          <span>{{ item.artistName }}</span>
          <span class="playCount-Number"
            ><i class="el-icon-video-play"></i>{{ item.playCount }}</span
          >
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      RecMvList: [],
    };
  },
  created() {
    this.getRecMvList();
  },
  methods: {
    async getRecMvList() {
      const data = await this.$http.get("/personalized/mv");
      // console.log(data);
      this.RecMvList = data.result;
      // console.log(this.RecMvList);
    },
  },
};
</script>

<style lang="less" scoped>
.flex-box {
  height: 200px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}

.RecMv {
  width: 270px;
  position: relative;
  font-size: 13px;
  // 超出部分隐藏 不换行
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  img {
    height: 150px;
    border-radius: 10px;
    margin-bottom: 5px;
  }
  .playCount-Number {
    position: absolute;
    top: 5px;
    right: 8px;
    color: #fff;
    font-size: 12px;
  }
}
</style>
