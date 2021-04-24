import HomePageView from "./views/HomePageView.vue";
import router from "@/router";

router.addRoute({
  path: "/",
  component: HomePageView,
  name: "HomePageView",
  meta: { layout: "app" },
});
