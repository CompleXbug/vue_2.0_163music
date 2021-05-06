<template>
  <div class="player">
    <audio autoplay :src="songsUrl"></audio>
    <div class="music-player">
      <button class="el-icon-arrow-left"></button>
      <button class="el-icon-caret-right"></button>
      <!-- <button class="el-icon-video-pause"></button> -->
      <button class="el-icon-arrow-right"></button>
    </div>

    <div class="progress">
      <el-progress :percentage="percentage" :color="customColor"></el-progress>
    </div>
    <!-- <h3>{{ msg }}</h3> -->
  </div>
</template>

<script>
export default {
  // props: ["msg"],
  data() {
    return {
      cmsg: "",
      songsUrl: "",
      customColor: "#FF4E4E",
      percentage: 20,
    };
  },
  created() {
    // this.getSongsAPI();
  },
  methods: {
    async getSongsAPI() {
      //   console.log(this.props.msg);
      const res = await this.$http.get(`/song/url?id=${this.cmsg}`);
      //   console.log(res);
      this.songsUrl = res.data[0].url;
      //   console.log(this.songsUrl);
    },
    prevSong() {},
    nextSong() {},
  },
  watch: {
    msg: function (newValue) {
      this.cmsg = newValue;
      console.log(this.cmsg);
      this.getSongsAPI();
    },
  },
};
</script>

<style lang="less" scoped>
.music-player {
  width: 250px;
  height: 25px;
  margin: 5px auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  > button {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #fff;
  }
}

.progress {
  width: 430px;
  height: 20px;
  margin: 0 auto;
}
</style>
