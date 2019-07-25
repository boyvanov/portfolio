const routes = [
  {
    path: "/",
    component: () => import("../components/pages/about.vue")
  },
  {
    path: "/works",
    component: () => import("../components/pages/works.vue")

  },
  {
    path: "/reviews",
    component: () => import("../components/pages/reviews.vue")

  },
  {
    path: "/login",
    component: () => import("../components/pages/login.vue"),
    meta: {
      public: true
    }
  }
];

export default routes;
