<template>
  <div class="main-body">
    <div class="songList">
      <!-- 歌单部分-头部大图 -->
      <div class="title-box">
        <div
          :style="{
            backgroundImage: `url(${bigimg.coverImgUrl})`,
          }"
        ></div>
        <div>
          <img :src="bigimg.coverImgUrl" />
          <div>精品歌单</div>
          <div>{{ bigimg.name }}</div>
          <div>{{ bigimg.copywriter }}</div>
        </div>
      </div>
    </div>

    <div class="songListNav">
      <!-- 筛选部分tag标签 全部歌单 部分热门标签筛选 -->
      <!-- <span class="tags">
        <div>
          <el-button @click="isTagsShowKeys" style="border-radius: 20px"
            >全部歌单<i class="el-icon-arrow-right"></i
          ></el-button>
        </div>
        <div v-show="isTagsShow" class="all-tags">
          <div class="all-tags-btn">
            <el-button> 全部歌单 </el-button>
          </div>
          <div class="all-tag-btn">
            <div class="">语种</div>
            <div class="">风格</div>
            <div class="">场景</div>
            <div class="">情感</div>
            <div class="">主题</div>
          </div>
        </div>
      </span> -->

      <div class="">
        <span
          @click="clickTag(item.name)"
          v-for="item in HotTagData"
          :key="item.id"
          >{{ item.name }}</span
        >
      </div>
    </div>

    <!-- 底部  歌单展示区域-->

    <div class="flex-box">
      <div
        class="img-name-span-count"
        v-for="item in PlayList"
        :key="item.id"
        @click="getSonglistDetail(item.id)"
      >
        <img :src="item.coverImgUrl" alt="" />
        <div class="listname">{{ item.name }}</div>
        <!-- <div class="username"></div> -->
        <div class="playcount">{{ (~~item.playCount / 10000) >> 0 }}万</div>
      </div>
    </div>

    <!-- 页码 -->
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagenum"
        :page-sizes="[20, 50, 100]"
        :page-size="limit"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>

    <!-- <songListDetail :SongListDetailInfo="SongListDetailInfo"></songListDetail> -->
  </div>
</template>

<script>
// import SongListDetail from "../components/gedan/SongListDetail.vue";

export default {
  components: {
    // SongListDetail,
  },
  data() {
    return {
      BoutiquePlaylist: [],
      bigimg: [],
      HotTagData: [],
      isTagsShow: false,
      PlayList: [],
      cat: "",
      order: "hot",
      limit: 20,
      item: [],
      total: 0,
      pagenum: 1,
    };
  },
  created() {
    this.getBoutiquePlaylist();
    this.getBoutiqueTagslist();
    this.getplaylist();
  },
  computed: {},
  methods: {
    async getBoutiquePlaylist() {
      const playdata = await this.$http.get(
        `/top/playlist/highquality?limit=1&cat=${this.cat}`
      );
      // console.log(playdata);
      this.bigimg = playdata.playlists[0];
      this.BoutiquePlaylist = playdata.playlists;
      // console.log(this.BoutiquePlaylist);
    },
    async getBoutiqueTagslist() {
      const tagsdata = await this.$http.get("/playlist/hot");
      // console.log(tagsdata);
      this.HotTagData = tagsdata.tags;
      // console.log(this.BoutiqueTagslist);
    },
    isTagsShowKeys() {
      this.isTagsShow = !this.isTagsShow;
    },
    async getplaylist() {
      const data = await this.$http.get(
        `/top/playlist?limit=${this.limit}&cat=${this.cat}&order=${
          this.order
        }&offset=${(this.pagenum - 1) * this.limit}`
      );
      // console.log(data);
      this.PlayList = data.playlists;
      this.total = data.total;
    },
    clickTag(e) {
      // console.log(e);
      this.cat = e;
      this.getplaylist();
      this.getBoutiquePlaylist();
    },
    handleSizeChange(newSize) {
      // console.log(newSize);
      this.limit = newSize;
      this.getplaylist();
    },
    handleCurrentChange(newPage) {
      // console.log(newPage);
      this.pagenum = newPage;
      this.getplaylist();
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
.title-box {
  // 整个精品歌单的头部box
  overflow: hidden;
  position: relative;
  width: 1100px;
  height: 170px;
  border-radius: 10px;
  margin-bottom: 15px;
  > div:first-child {
    // 毛玻璃效果
    background-position: center;
    filter: blur(60px);
    height: 100%;
  }
  > div:nth-child(2) {
    // 装img 3段文字描述 的第二个box
    position: absolute;
    width: 100%;
    height: 150px;
    top: 10px;
    left: 10px;
    border-radius: 10px;
    > img:first-child {
      // 小图
      width: 150px;
      height: 150px;
      border-radius: 10px;
      float: left;
    }
    > div:nth-child(2) {
      height: 30px;
      width: 100px;
      margin: 20px 0 20px 160px;
      text-align: center;
      line-height: 30px;
      border: 1px solid rgb(231, 170, 90);
      border-radius: 30px;
      font-size: 15px;
      color: rgb(231, 170, 90);
    }
    > div:nth-child(3) {
      margin-left: 160px;
      color: #fff;
      font-size: 17px;
      margin-bottom: 10px;
    }
    > div:nth-child(4) {
      font-size: 13px;
      color: #999989;
      margin-left: 160px;
    }
  }
}

.songListNav {
  height: 30px;
  margin-top: 15px;
  width: 1100px;
  > div:nth-child(1) {
    float: right;
    > span {
      margin-left: 20px;
      color: #acacac;
      font-size: 12px;
      // 鼠标移入颜色
      &:hover {
        color: #d0d0d0;
      }
    }
  }
}

.flex-box {
  width: 1100px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .img-name-span-count {
    margin-bottom: 15px;
    position: relative;
    width: 205px;
    font-size: 13px;
    img {
      width: 100%;
      border-radius: 5px;
    }
    .playcount {
      position: absolute;
      right: 5px;
      top: 0;
      font-size: 15px;
      color: #fff;
    }
  }
}
.pagination {
  margin-left: 210px;
  margin-top: 20px;
}

.main-body {
  width: 1160px;
  margin: 0 auto;
}

.tags {
  // display: flex;
  justify-content: space-between;
  width: 1100px;
  height: 30px;
  // background-color: red;
}

.all-tags {
  margin-top: 5px;
  width: 750px;
  height: 750px;
  background-color: blue;
  border-radius: 5px;
  border: 1px solid #E5E5E5F;
}

.all-tags-btn {
  width: 100%;
  border-bottom: 1px solid #e5e5e5;
}
</style>
