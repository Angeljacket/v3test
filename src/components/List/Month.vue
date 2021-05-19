<template>
  <div class="list">
    <template v-for="item in summaryData" :key="item.title">
      <Summary :field="item.title" :content="item.content" />
    </template>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  name: 'MonthList',
  props: {
    data: Object,
  },
  setup(props) {
    return {
      summaryData: computed(() => {
        const computedData = props.data;
        return [
          { title: '健康', content: computedData.health },
          { title: '工作', content: computedData.work },
          { title: '恋爱', content: computedData.love },
          { title: '财运', content: computedData.money },
          { title: '本月', content: computedData.all },
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
