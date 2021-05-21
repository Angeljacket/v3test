<template>
  <div id="app">
    <my-header>
      星座物语1
    </my-header>
    <nav-bar />
    <ErrorTip />
    <router-view v-slot="{ Component }" v-if="!errorCode">
      <keep-alive>
        <component :is="Component" />
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
import { watch, computed, onMounted } from 'vue';
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
    onMounted(() => {
      timeTravel();
    });
    watch(
      () => {
        return router.currentRoute.value.name;
      },
      value => {
        store.commit('setField', value);
      },
    );
    const timeTravel = () => {
      let nowTime = new Date().getTime();
      const wantTime = '00:00:00';
      let timePoints = wantTime.split(':').map(i => parseInt(i));
      let recent = new Date().setHours(...timePoints);
      recent >= nowTime || (recent += 24 * 3600000);
      setTimeout(() => {
        timeFn();
        setInterval(timeFn, config.interval * 3600000);
      }, recent - nowTime);
    };
    const timeFn = () => {
      localStorage.clear();
      window.location.reload();
    };
    return {
      errorCode: computed(() => state.errorCode),
    };
  },
};
</script>
