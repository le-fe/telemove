<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
const defaultLayout = "blank";
export default {
  setup() {
    const { currentRoute } = useRouter();
    const layout = computed(() =>
      currentRoute.value.meta.layout
        ? `${currentRoute.value.meta.layout || defaultLayout}-layout`
        : `blank-layout`
    );
    return {
      layout,
    };
  },
};
</script>
