<template>
  <div class="cons-item">
    <div class="title">{{ title }}</div>
    <div class="content">{{ content || '加载中' }}</div>
  </div>
</template>

<script>
export default {
  name: 'ConsItem',
  props: {
    title: String,
    content: String | Number,
  },
};
</script>

<style scoped lang="scss">
.cons-item {
  display: flex;
  flex-direction: row;
  height: 0.44rem;
  border: 1px solid #ddd;
  border-radius: 0.05rem;
  margin-bottom: 0.15rem;
  font-size: 0.16rem;
  background-color: #fff;

  .title {
    width: 1rem;
    height: 0.44rem;
    color: #c71585;
    text-align: center;
    line-height: 0.44rem;
  }

  .content {
    font-size: 0.16rem;
    line-height: 0.44rem;
    color: #666;
  }
}
</style>
