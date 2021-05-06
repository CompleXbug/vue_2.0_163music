import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Personal from "../views/Personal.vue";
import SongList from "../views/SongList.vue";
import SongListDetail from "../components/gedan/SongListDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/personal",
    children: [
      {
        path: "/personal",
        component: Personal,
      },
      {
        path: "/songlist",
        component: SongList,
      },
      {
        path: "/songlistdetail/:id",
        name: "SongListdetail",
        component: SongListDetail,
      },
    ],
  },

  // {
  //   path: "/songlist",
  //   name: "SongList",
  //   component: SongList,
  // },

  //   {
  //     path: "/about",
  //     name: "About",
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () =>
  //       import(/* webpackChunkName: "about" */ "../views/About.vue"),
  //   },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
