<template>
  <div class="list">
    <template v-for="item in consData" :key="item.title">
      <ConsItem :title="item.title" :content="item.content" />
    </template>
    <Summary field="明日" :content="data.summary" />
  </div>
</template>

<script>
import { computed } from 'vue';
export default {
  name: 'TomorrowList',
  props: {
    data: Object,
  },
  setup(props) {
    return {
      consData: computed(() => {
        const computedData = props.data;
        return [
          { title: '明日日期', content: computedData.datetime },
          { title: '配对星座', content: computedData.QFriend },
          { title: '幸运颜色', content: computedData.color },
          { title: '幸运数字', content: computedData.number },
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
