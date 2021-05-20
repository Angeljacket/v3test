<template>
  <div id="app">
    <my-header>
      星座物语1
    </my-header>
    <nav-bar />
    <ErrorTip />
    <router-view v-slot="{ Component }" v-if="!errorCode">
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
import ErrorTip from '@/components/ErrorTip';
import { useStore } from 'vuex';
import { watch, computed } from 'vue';
import { useRouter } from 'vue-router';
export default {
  name: 'App',
  components: {
    MyHeader,
    Tab,
    NavBar,
    ErrorTip,
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
          store.commit('setField', value)
      },
    );
    return {
        errorCode: computed(() => state.errorCode)
    }
  },
};
</script>
