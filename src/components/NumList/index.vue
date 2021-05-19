<template>
  <div class="num-list">
    <NumItem
      v-for="(item, index) of numData"
      :key="index"
      :item="item"
      :data="data"
    />
  </div>
</template>

<script>
import NumItem from './Item.vue';
import numData from '@/datas/num';
export default {
  name: 'NumList',
  props: {
      data: Object
  },
  components: {
    NumItem,
  },
  setup() {
    return {numData};
  },
};
</script>

<style scoped lang="scss">
  .num-list {
    display: flex;
    flex-direction: row;
    margin: .15rem 0;
    padding: .1rem;
    box-shadow: .02rem .02rem .05rem #999;
  }
</style>
