<template>
  <div class="songlistdetail" v-if="listInfo && listInfo.creator">
    <!-- <player :msg="Playerid"></player> -->
    {{ Playerid }}
    <div class="TopInfo">
      <img :src="listInfo.coverImgUrl" class="detail-img" />

      <div class="top_detail_info">
        <div class="song_list_name">
          <span>歌单</span>
          {{ listInfo.name }}
        </div>

        <div class="creator-info">
          <img :src="listInfo.creator.avatarUrl" />
          <span>{{ listInfo.creator.nickname }}</span>
          <span>2020-11-27创建</span>
        </div>

        <div class="songlist_play">
          <div @click="play_all">
            ▶播放全部
            <span>🞢</span>
          </div>
          <div>🗀 收藏({{ listInfo.subscribedCount }})</div>
          <div>➚ 分享({{ listInfo.shareCount }})</div>
          <div>⮋ 下载全部</div>
        </div>

        <div class="tags">
          <span class="lightWhite">标签：</span>
          <span v-for="item in listInfo.tags" :key="item.id">
            {{ item }}
          </span>
        </div>

        <div class="count">
          <span class="songnum">歌曲:{{ listInfo.trackCount }}</span>
          <span class="playcount">播放数量:{{ listInfo.playCount }}</span>
        </div>

        <div class="description">歌单简介:{{ listInfo.description }}</div>
      </div>
    </div>

    <div v-if="SongsDetail && SongsDetail[0]">
      <el-table
        :data="SongsDetail"
        stripe
        style="width: 100%"
        @row-click="getSongId"
      >
        <el-table-column prop="name" label="音乐标题" width="550">
        </el-table-column>
        <el-table-column prop="ar[0].name" label="歌手" width="300">
        </el-table-column>
        <el-table-column prop="al.name" label="专辑" width="300">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
// import Player from "../bofangqi/Player";

export default {
  components: {
    // Player,
  },
  data() {
    return {
      listInfo: "",
      trackIds: [],
      SongsDetail: {},
      // 歌单里所有歌曲的id
      SongIDList: [],
      arname: [],
      Playerid: "",
    };
  },

  created() {
    this.PlaylistDetailData();
  },
  methods: {
    async PlaylistDetailData() {
      //   console.log(this.$route);
      const id = this.$route.params.id;
      //   console.log(id);
      const res = await this.$http.get(`/playlist/detail?id=${id}`);
      // console.log(res);
      this.listInfo = res.playlist;
      // console.log(this.listInfo.trackIds);
      res.playlist.trackIds.map((trackId) => {
        this.SongIDList.push(trackId.id);
      });
      //   return SongIDList;
      const detail = await this.$http.get(
        "/song/detail?ids=" + this.SongIDList
      );
      // console.log(detail);
      this.SongsDetail = detail.songs;
    },
    getSongId(row) {
      // console.log(row.id);
      this.Playerid = row.id;
    },
    play_all() {},
  },
};
</script>

<style lang="less" scoped>
.songlistdetail {
  margin: 30px 25px 0 25px;
  .TopInfo {
    height: auto;
  }
  img {
    height: 185px;
    border-radius: 10px;
    margin-right: 20px;
    float: left;
  }
  .top_detail_info {
    // 右侧文字描述
    height: 185px;
    margin-left: 210px;
    .song_list_name {
      // 歌单名字字体大小加粗
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
      > span {
        // 歌单 的样式
        color: red;
        font-size: 12px;
        font-weight: 100;
        border-radius: 3px;
        border: 1px solid #f28c8c;
        // span元素有padding属性
        padding: 1px 6px;
        margin-right: 10px;
      }
    }
  }
}
.creator-info {
  > img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    // display: inline-block;
  }
  > * {
    // 让图片两侧的文字 以图片中心 交叉轴排列
    vertical-align: middle;
    margin-right: 10px;
    font-size: 12px;
  }
  span:nth-child(2) {
    color: rgb(133, 171, 183);
    &:hover {
      color: rgb(179, 206, 229);
    }
  }
}

.songlist_play {
  margin-top: 15px;
  display: flex;
  // margin-right: 15px;
  > div:first-child {
    background-color: rgb(236, 65, 65);
    color: #fff;
    border-color: #fff0;
  }
  span {
    border-left-style: solid;
    border-width: 1px;
    padding-left: 5px;
    border-color: #fff4;
  }
  > div:hover {
    background-color: rbg(52, 52, 52);
  }
  > * {
    // color: #fff9;
    font-size: 15px;
    border-radius: 30px;
    padding: 3px 15px;
    margin-right: 10px;
    border: 1px solid #000;
  }
}

.tags {
  margin-top: 10px;
  font-size: 12px;
  color: rgb(133, 185, 230);
  .lightWhite {
    color: #000;
  }
}
.count {
  font-size: 13px;
  margin-top: 10px;
  color: #676767;
  .songnum {
    margin-right: 15px;
  }
}
.description {
  margin-top: 10px;
  font-size: 15px;
  color: #676767;
}
</style>
