<template>
  <div
    class="nav-bar"
    v-nav-current="{
      className: 'nav-item',
      activeClass: 'nav-current',
      curIdx,
    }"
    @click="navClick($event)"
  >
    <div class="scroll-wrapper">
      <div class="nav-wrapper">
        <!--:style="`width:${navData.length * 8}rem`"-->
        <nav-item
          v-for="(item, index) of navData"
          :key="index"
          :item="item"
          :index="index"
        ></nav-item>
      </div>
    </div>
  </div>
</template>

<script>
import navData from '@/datas/nav';
import navItem from './Item';
import { ref } from 'vue';
import { useStore } from 'vuex';
import { navCurrent } from '@/directives';
import getData from '@/services';

export default {
  name: 'NavBar',
  components: {
    navItem,
  },
  directives: {
    navCurrent,
  },
  setup() {
    const curIdx = ref(0),
      store = useStore();
    const navClick = e => {
      const className = e.target.className;
      if (className === 'nav-item') {
        const tar = e.target,
          idx = tar.dataset.index,
          consName = tar.innerText;

        curIdx.value = idx;
        store.commit('setConsName', consName);
        getData(store);
      }
    };
    return {
      navData,
      curIdx,
      navClick,
    };
  },
};
</script>

<style scoped lang="scss">
.nav-bar {
  position: fixed;
  top: 0.44rem;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 0.38rem;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  background-color: #fff;
  overflow: hidden;
  .scroll-wrapper {
    height: 0.46rem;
    overflow-x: auto;
    .nav-wrapper {
      min-width: 100%;
      display: inline-flex;
      flex-direction: row;
      height: 0.42rem;
    }
  }
}
</style>
