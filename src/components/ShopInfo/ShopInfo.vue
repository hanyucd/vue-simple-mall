<template>
  <div class="shop">
    <img :src="item.imgUrl" class="shop__img">
    <div :class="{ shop__content: true, 'shop__content--bordered': hideBorder ? false : true }">
      <div class="shop__content__title">{{ item.name }}</div>
      <div class="shop__content__tags">
        <span class="shop__content__tag">月售：{{ item.sales }}</span>
        <span class="shop__content__tag">起送：{{ item.expressLimit }}</span>
        <span
          class="shop__content__tag"
        >基础运费：{{ item.expressPrice }}</span>
      </div>
      <p class="shop__content__highlight">{{ item.slogan }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: ['item', 'hideBorder']
};
</script>

<style lang="scss" scoped>
  @import './style.scss';
</style>
