<template>
  <div class="position">
    <span class="iconfont position__icon">&#xe8ba;</span>
    南京工业职业技术大学计算机与软件学院软件工程技术本科专业2021级
    <span class="iconfont position__notice">&#xe623;</span>
  </div>
  <!-- 搜索 -->
  <div class="search">
    <span class="iconfont">&#xe632;</span>
    <span class="search__text">山姆会员商店优惠商品</span>
  </div>
  <!-- banner -->
  <div class="banner">
    <img src="http://47.101.182.200:9000/vue3/banner.jpeg" class="banner__img">
  </div>
  <!-- icon九宫格区 -->
  <div class="icons">
    <div v-for="item in iconsList" :key="item.desc" class="icons__item">
      <img class="icons__item__img" :src="`http://47.101.182.200:9000/vue3/icon/${item.imgName}.png`">
      <p class="icons__item__desc">{{ item.desc }}</p>
    </div>
  </div>
  <div class="gap" />
</template>
<script>
export default {
  setup() {
    const iconsList = [
      { imgName: '超市', desc: '超市便利' },
      { imgName: '菜市场', desc: '菜市场' },
      { imgName: '水果店', desc: '水果店' },
      { imgName: '鲜花', desc: '鲜花绿植' },
      { imgName: '医药健康', desc: '医疗健康' },
      { imgName: '家居', desc: '家居时尚' },
      { imgName: '蛋糕', desc: '烘焙蛋糕' },
      { imgName: '签到', desc: '签到' },
      { imgName: '大牌免运', desc: '大牌免运' },
      { imgName: '红包', desc: '红包套餐' },
    ];
    return { iconsList };
  },
};
</script>

<style lang="scss" scoped>
  @import './style.scss';
</style>
