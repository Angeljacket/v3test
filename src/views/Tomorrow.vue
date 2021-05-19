<template>
  <div class="container">
    <cons-card :name="tomorrowData.name" :allIndex="tomorrowData.all" />
    <ConsList :data="tomorrowData"/>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import getData from '@/services';
import ConsList from '@/components/List/Tomorrow';

export default {
  name: 'TomorrowPage',
  components: {
      ConsList
  },
  setup() {
    const store = useStore(),
      state = store.state;
    onMounted(() => {
      getData(store);
    });
    return {
      tomorrowData: computed(() => state.tomorrow),
    };
  },
};
</script>

<style scoped lang="scss"></style>
