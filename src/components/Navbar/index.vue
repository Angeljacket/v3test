<template>
  <div
    class="nav-bar"
    v-nav-current="
      ({ className: 'nav-item', activeClass: 'nav-current', curIdx })
    "
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
import { navCurrent } from '@/directives';
export default {
  name: 'NavBar',
  components: {
    navItem,
  },
  directives: {
    navCurrent,
  },
  setup() {
    const curIdx = ref(0);
    const navClick = e => {
        console.log(e);
        // const idx = e.target.dataset
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
