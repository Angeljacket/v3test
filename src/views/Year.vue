<template>
  <div class="container">
    <cons-card :name="yearData.name" :allIndex="yearData.all" />
    <ConsList :data="yearData" />
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import getData from '@/services';
import ConsList from '@/components/List/Year';

export default {
  name: 'YearPage',
  components: {
    ConsList,
  },
  setup() {
    const store = useStore(),
      state = store.state;
    onMounted(() => {
      getData(store);
    });
    return {
      yearData: computed(() => state.year),
    };
  },
};
</script>

<style scoped lang="scss"></style>
