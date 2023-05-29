<template>
  <div class="main">
    购物车

    <TabBar :current-index="1" />
  </div>
</template>

<script>
import TabBar from '@/components/TabBar/TabBar.vue';

export default {
  components: { TabBar },
  setup() {}
};
</script>

<style lang="scss" scoped>
  @import './style.scss';
</style>
