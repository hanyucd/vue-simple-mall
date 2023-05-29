<template>
  <div class="code">
    首页

    <TabBar :current-index="0" />
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
