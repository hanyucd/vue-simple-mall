<template>
  <div class="main">
    订单

    <TabBar :current-index="2" />
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
