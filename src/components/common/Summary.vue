<template>
  <div class="summary-wrapper">
    <div class="inner">
      <header class="header">
        <h1>{{ field }}运势总结</h1>
      </header>
      <div class="content">{{ content || '加载中...' }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Summary',
  props: {
    field: String,
    content: String,
  },
};
</script>

<style lang="scss" scoped>
.summary-wrapper {
  padding: 0 0.1rem 0.1rem;
  box-sizing: border-box;

  .inner {
    border-radius: 0.05rem;
    border: 1px solid #ddd;
    overflow: hidden;

    .header {
      height: 0.35rem;
      background-color: #c71585;
      color: #fff;
      font-size: 0.16rem;
      text-align: center;
      line-height: 0.35rem;
    }

    .content {
      background-color: #fff;
      font-size: 0.14rem;
      padding: 0.1rem;
      text-indent: 2em;
      line-height: 0.2rem;
    }
  }
}
</style>
