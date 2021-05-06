<template>
  <div>
    <el-container>
      <!-- 头 -->

      <el-header>
        <div class="left">
          <div class="log">
            <img src="@/assets/css/logo/2.jpg" alt="" />
            <span> 网 抑 云 音 乐</span>

            <!-- 搜 -->
            <div class="searchbox">
              <i class="el-icon-arrow-left"></i>
              <i class="el-icon-arrow-right"></i>
              <el-input
                placeholder="搜索"
                prefix-icon="el-icon-search"
                v-model="input1"
              >
              </el-input>
              <i class="el-icon-microphone" title="听歌识曲"></i>
            </div>
          </div>
        </div>
        <div class="right">
          <!-- 菜单 -->
          <div class="menuBox">
            <div class="login">
              <img src="@/assets/css/logo/2.jpg" alt="" />
              <div>到点了 上号</div>
              <div>开通vip</div>
              <div class="el-icon-setting"></div>
              <div class="el-icon-message"></div>
              <div class="el-icon-copy-document"></div>
              <div class="el-icon-minus"></div>
              <div class="el-icon-close"></div>
            </div>
          </div>
        </div>
      </el-header>
      <el-container class="main_box">
        <!-- 侧 -->
        <el-aside width="200px">
          <el-menu default-active="1" class="el-menu-vertical-demo">
            <el-menu-item index="1">
              <span slot="title">发现音乐</span>
            </el-menu-item>
            <el-menu-item index="2">
              <span slot="title">视频</span>
            </el-menu-item>
            <el-menu-item index="3">
              <span slot="title">朋友</span>
            </el-menu-item>
            <el-menu-item index="4">
              <span slot="title">直播</span>
            </el-menu-item>
            <el-menu-item index="5">
              <span slot="title">私人FM</span>
            </el-menu-item>
            <el-submenu index="6">
              <template slot="title">
                <span>创建的歌单</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="6-1">周杰伦</el-menu-item>
                <el-menu-item index="6-2">五月天</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">
                <span>收藏的歌单</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="7-1">KTV</el-menu-item>
                <el-menu-item index="7-2">麦霸</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

        <!-- 主体 -->
        <el-main>
          <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
            <el-menu-item index="1" @click="gohome()">个性推荐</el-menu-item>
            <el-menu-item index="2" @click="gosonglist()">歌单</el-menu-item>
            <el-menu-item index="3">主播电台</el-menu-item>
            <el-menu-item index="4">排行榜</el-menu-item>
            <el-menu-item index="5">歌手</el-menu-item>
            <el-menu-item index="6">最新音乐</el-menu-item>
          </el-menu>
          <router-view></router-view>
        </el-main>
      </el-container>
      <el-footer>
        <Player />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Player from "../components/bofangqi/Player";
// import Carousel from "@/components/Carousel.vue";
// import Recommended from "@/components/Recommended.vue";
// import Exclusive from "@/components/Exclusive.vue";

export default {
  name: "MusicApp",
  components: {
    Player,
    // Carousel,
    // Recommended,
    // Exclusive,
  },
  data() {
    return {
      input1: "",
    };
  },
  methods: {
    gohome() {
      this.$router.push("/");
    },
    gosonglist() {
      this.$router.push("/songlist");
    },
  },
};
</script>

<style lang="less" scoped>
/deep/ .el-container {
  height: 100%;
}
.left {
  display: inline-flex;
}

.el-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  background-color: #ec4141;
  color: #fffafa;
  // text-align: center;
  line-height: 60px;
  .log {
    display: flex;
    align-items: center;
    margin-right: 80px;
    img {
      width: 50px;
      margin-right: 20px;
      border-radius: 30px;
    }
    span {
      margin-right: 50px;
    }
  }
}

.searchbox {
  i {
    width: 18px;
    height: 18px;
    margin-top: 21px;
    margin-left: 20px;
    margin-right: 10px;
    background-color: #d93b3b;
    border-radius: 50%;
  }
  .el-input {
    width: 160px;
    margin-right: 10px;
    //   /deep/.el-input__inner {
    //     border-radius: 20px;
    //   }
  }
}

.login {
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  img {
    width: 30px;
    border-radius: 30px;
  }
}

.el-aside {
  background-color: #ffffff;
  border-right: 1px solid #e1e1e1;
  // height: 1130px;
  // text-align: center;
  .is-active {
    font-size: 20px;
    background-color: #f6f6f7;
    color: #313131;
    font-weight: bold;
  }
}

.el-main {
  width: 1660px;
  // display: flex;
  // flex-direction: row;
  // align-items: center;
  background-color: #ffffff;
  color: #000000;
  // text-align: center;
  .el-menu {
    margin-bottom: 30px;
    .el-menu-item {
      font-size: 16px;
    }
    .is-active {
      font-size: 20px;
      background-color: #f6f6f7;
      color: #313131;
      font-weight: bold;
      // border-bottom: 3px solid #ec4141;
      &:after {
        content: " ";
        width: 80%;
        height: 0.18rem;
        background: rgb(236, 65, 65);
        position: absolute;
        bottom: -0.1rem;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
}

/deep/.el-menu.el-menu--horizontal {
  border-bottom: none;
}

.mainBody {
  margin: 0 auto;
  max-width: 1100px;
  min-width: 765px;
}

.main_box {
  margin-bottom: 70px;
}

.el-footer {
  border-top: 1px solid #e1e1e1;
  background-color: #fff;
  position: fixed;
  width: 100%;
  height: 70px;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999;
}
</style>
