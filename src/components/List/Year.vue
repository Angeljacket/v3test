<template>
  <div class="list">
    <template v-for="item in consData" :key="item.title">
      <ConsItem :title="item.title" :content="item.content" />
    </template>
    <template v-for="item in summaryData" :key="item.title">
      <Summary :field="item.title" :content="item.content" />
    </template>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  name: 'YearList',
  props: {
    data: Object,
  },
  setup(props) {
    return {
      summaryData: computed(() => {
        const computedData = props.data;
        return [
          {
            title: '健康',
            content: computedData.health && computedData.health[0],
          },
          {
            title: '事业',
            content: computedData.career && computedData.career[0],
          },
          { title: '恋爱', content: computedData.love && computedData.love[0] },
          {
            title: '财运',
            content: computedData.finance && computedData.finance[0],
          },
          {
            title: '本月',
            content:
              computedData.mima &&
              `${computedData.mima.info}。${computedData.mima.text[0]}`,
          },
        ];
      }),
      consData: computed(() => {
        const computedData = props.data;
        return [
          {
            title: '所在年份',
            content: computedData.date,
          },
          {
            title: '幸运石头',
            content: computedData.luckeyStone,
          },
        ];
      }),
    };
  },
};
</script>

<style scoped lang="scss">
.list {
  padding: 0.15rem 0.1rem;
  box-sizing: border-box;
}
</style>
