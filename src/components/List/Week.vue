<template>
  <div class="list">
    <ConsItem title="本周日期" :content="data.date" />
    <template v-for="item in consData" :key="item.title">
      <Summary :field="item.title" :content="item.content" />
    </template>
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  name: 'WeekList',
  props: {
    data: Object,
  },
  setup(props) {
    return {
      consData: computed(() => {
        const computedData = props.data;
        return [
          { title: '本周日期', content: computedData.date },
          { title: '工作', content: computedData.work },
          { title: '学业', content: computedData.job },
          { title: '恋爱', content: computedData.love },
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
