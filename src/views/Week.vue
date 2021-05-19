<template>
  <div class="container">
    <cons-card :name="weekData.name" :allIndex="weekData.all" />
    <ConsList :data="weekData" />
  </div>
</template>

<script>
import { onMounted, computed, onActivated, ref } from 'vue';
import { useStore } from 'vuex';
import getData from '@/services';
import ConsList from '@/components/List/Week';

export default {
  name: 'WeekPage',
  components: {
    ConsList,
  },
  setup() {
    const store = useStore(),
      state = store.state,
      status = ref('');

    onMounted(() => {
      getData(store);
      status.value = state.consName;
    });

    onActivated(() => {
      if (status.value !== state.consName) {
        getData(store);
        status.value = state.consName;
      }
    });
    return {
      weekData: computed(() => state.week),
    };
  },
};
</script>

<style scoped lang="scss"></style>
