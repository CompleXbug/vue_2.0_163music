<template>
  <div>
    <span class="Recom-title">推荐歌单<i class="el-icon-arrow-right"></i></span>
    <div class="fleximg">
      <div
        class="Recom"
        v-for="item in recmonList"
        :key="item.id"
        @click="getSonglistDetail(item.id)"
      >
        <div class="Recom-box">
          <img :src="item.picUrl" alt="" />
          <span class="Recom-name">{{ item.name }}</span>
          <div class="Recom-playCount">
            <i class="el-icon-caret-right"></i
            >{{ (~~item.playCount / 10000) >> 0 }}万
          </div>
          <div class="playimg"><i class="el-icon-video-play"></i></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recmonList: [],
    };
  },
  created() {
    this.getRecomList();
  },
  methods: {
    async getRecomList() {
      const data = await this.$http.get("/personalized?limit=10");
      //   console.log(data);
      this.recmonList = data.result;
      //   console.log(this.recmonList);
    },
    getSonglistDetail(id) {
      this.$router.push({ path: `/songlistdetail/${id}` });
      // 这里拿到被点击的歌单的id 传给歌单详情页
      // console.log(e);
      // const data = await this.$http.get(`/playlist/detail?id=${e}`);
      // console.log(data);
      // this.SongListDetailInfo = data;
      // console.log(this.SongListDetailInfo);
    },
  },
};
</script>

<style lang="less" scoped>
.Recom-title {
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
}

.Recom {
  width: 210px;
  height: 260px;
  font-size: 14px;
  img {
    width: 205px;
    border-radius: 5px;
    margin-top: 20px;
    cursor: pointer;
  }
}

.fleximg {
  //   margin: 3px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.Recom-name {
  cursor: pointer;
}

.Recom-box {
  position: relative;
  &:hover .playimg {
    display: block;
  }
}

.Recom-playCount {
  position: absolute;
  right: 5px;
  top: 20px;
  color: #fff;
}

.playimg {
  position: absolute;
  right: 15px;
  bottom: 40px;
  font-size: 28px;
  color: #fff;
  display: none;
}
</style>
