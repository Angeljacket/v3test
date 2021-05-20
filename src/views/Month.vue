<template>
  <div class="container">
    <cons-card :name="monthData.name" :allIndex="Number(monthData.all)" />
    <ConsList :data="monthData" />
  </div>
</template>

<script>
import { onMounted, computed, onActivated, ref } from 'vue';
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
      state = store.state,
      status = ref('');
    onMounted(() => {
      getData(store);
    });
    onActivated(() => {
      if (status.value !== state.consName) {
        getData(store);
        status.value = state.consName;
      }
    });
    return {
      monthData: computed(() => state.month),
    };
  },
};
</script>

<style scoped lang="scss"></style>
