<template>
  <div class="New-box">
    <span class="com-title">最新音乐<i class="el-icon-arrow-right"></i></span>
    <div class="flex-box">
      <div class="music-box" v-for="item in newSongList" :key="item.id">
        <div class="img-span-box">
          <img :src="item.album.blurPicUrl" alt="" />
          <span>{{ item.name }}</span
          ><br />
          <div>
            <span v-if="item.fee == 8" class="border">SQ</span>
            <span v-if="item.mvid != 0" class="border">MV▸</span>
            {{ item.album.artists[0].name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newSongList: [],
    };
  },
  created() {
    this.getNewSongList();
  },
  methods: {
    async getNewSongList() {
      const data = await this.$http.get("/top/song?type=0");
      //   console.log(data);
      this.newSongList = data.data.slice(6, 18);
      // console.log(this.newSongList);
    },
  },
};
</script>

<style lang="less" scoped>
.New-box {
  width: 1160px;
}
.music-box {
  width: 370px;
  height: 50px;
  margin-bottom: 20px;
  img {
    width: 50px;
    border-radius: 5px;
    float: left;
    margin-right: 10px;
    // margin-bottom: 20px;
  }
  span {
    font-size: 8px;
  }
  &:hover {
    background-color: #eaeaea;
  }
}

.flex-box {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.img-span-box {
  //   display: flex;
  //   flex-direction: row;
  line-height: 25px;
  font-size: 13px;
  color: #9f9f9f;
}

.border {
  border: 1px solid red;
  margin-right: 3px;
  color: red;
  border-radius: 5px;
}
</style>
