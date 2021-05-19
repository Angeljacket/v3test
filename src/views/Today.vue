<template>
  <div class="container">
    <cons-card :name="todayData.name" :allIndex="todayData.all" />
    <NumList :data="todayData" />
    <ConsList :data="todayData" />
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import getData from '@/services';
import NumList from '@/components/NumList';
import ConsList from '@/components/List/Today';
export default {
  name: 'TodayPage',
  components: {
    NumList,
    ConsList,
  },
  setup() {
    const store = useStore(),
      state = store.state;
    onMounted(() => {
      getData(store);
    });
    return {
      todayData: computed(() => state.today),
    };
  },
};
</script>

<style scoped lang="scss"></style>
