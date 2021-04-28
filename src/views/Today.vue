<template>
  <div class="container">
    TodayPage
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { getData } from '@/services/request';

export default {
  name: 'TodayPage',
  setup() {
    onMounted(() => {
      getData('金牛座', 'today');
    });
  },
};
</script>

<style scoped lang="scss"></style>
