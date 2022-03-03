import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const VueRouter = new Router({
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: () => import("../views/home/Home.vue")
    },
    {
      path: "/category",
      component: () => import("../views/category/Category.vue")
    },
    {
      path: "/cart",
      component: () => import("../views/cart/Cart.vue")
    },
    {
      path: "/profile",
      component: () => import("../views/profile/Profile.vue")
    },
    {
      path: "/detail/:iid",
      component: () => import("../views/detail/Detail.vue")
    }
  ],
  mode: "history"
});
export default VueRouter;
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, resolve, reject) {
  if (resolve || reject)
    return originalPush.call(this, location, resolve, reject);
  return originalPush.call(this, location).catch(err => err);
};
