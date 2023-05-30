<template>
  <div class="warpper">
    <StaticPart />
    <NearByShop />
  </div>
  <TabBar :current-index="0" />
</template>

<script>
import StaticPart from './components/StaticPart/StaticPart.vue';
import NearByShop from './components/NearByShop/NearByShop';
import TabBar from '@/components/TabBar/TabBar.vue';

export default {
  components: { TabBar, StaticPart, NearByShop },
  setup() {}
};
</script>

<style lang="scss" scoped>
  @import './style.scss';
</style>
