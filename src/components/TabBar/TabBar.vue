<template>
  <div class="docker">
    <div v-for="(item, index) in dockerList" :key="item.icon" :class="{ docker__item: true, 'docker__item--active': index === currentIndex }">
      <router-link :to="item.to">
        <div class="iconfont" v-html="item.icon" />
        <div class="docker__title">{{ item.text }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useRouter, useRoute } from 'vue-router';

export default{
  props: {
    currentIndex: { type: Number, default: 0 },
  },
  setup() {
    const dockerList = [
      { icon: '&#xe751;', text: '首页', to: { name: 'HomeRoute', } },
      { icon: '&#xe899;', text: '购物车', to: { name: 'CartRoute' } },
      { icon: '&#xe626;', text: '订单', to: { name: 'OrderRoute' } },
      { icon: '&#xe8bb;', text: '我的', to: { name: 'ProfileRoute' } },
    ];

    const $router = useRouter();
    const $route = useRoute();
    // console.log($router);
    // console.log($route);
    
    return {
      dockerList
    };
  }
};
</script>

<style lang="scss" scoped>
  @import './style.scss';
</style>
