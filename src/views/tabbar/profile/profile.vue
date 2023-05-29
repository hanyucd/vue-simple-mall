<template>
  <div class="main">
    我的

    <TabBar :current-index="3" />
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
