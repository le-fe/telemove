<template>
  <div class="min-h-screen">
    <AppHeader />
    <router-view />
    <AppFooter />
  </div>
</template>
<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "app-layout",
  components: {
    AppHeader,
    AppFooter,
  },
});
</script>
