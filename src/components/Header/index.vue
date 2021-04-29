<template>
  <header class="header">
    <img src="../../assets/img/cons.png" />
    <h1>
      <slot>星座物语</slot>
    </h1>
  </header>
</template>

<script>
export default {
  name: 'myHeader',
};
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: .44rem;
  background-color: #DB7093;
  color: #ffffff;
  font-size: .18rem;
  img {
    width: .23rem;
  }
}
</style>
