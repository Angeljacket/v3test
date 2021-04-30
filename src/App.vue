<template>
  <div id="app">
    <my-header>
      星座物语1
    </my-header>
    <nav-bar />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </router-view>
    <tab />
  </div>
</template>

<script>
import MyHeader from '@/components/Header';
import Tab from '@/components/Tab';
import NavBar from '@/components/Navbar';
import { useStore } from 'vuex';
import { watch } from 'vue';
import { useRouter } from 'vue-router';
export default {
  name: 'App',
  components: {
    MyHeader,
    Tab,
    NavBar,
  },
  setup() {
    const store = useStore(),
      state = store.state,
      router = useRouter();

    router.push('/');
    store.commit('setField', 'today');
    watch(
      () => {
        return router.currentRoute.value.name;
      },
      value => {
          console.log(value)
          store.commit('setField', value)
      },
    );
  },
};
</script>
