<template>
  <div class="container">
    <cons-card :name="monthData.name" :allIndex="Number(monthData.all)" />
    <ConsList :data="monthData" />
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import getData from '@/services';
import ConsList from '@/components/List/Month';

export default {
  name: 'MonthPage',
  components: {
    ConsList,
  },
  setup() {
    const store = useStore(),
      state = store.state;
    onMounted(() => {
      getData(store);
      console.log(store.state);
    });
    return {
      monthData: computed(() => state.month),
    };
  },
};
</script>

<style scoped lang="scss"></style>
