<template>
  <div>
    <Header></Header>
    <div class="container">
      <title>Minu külastatud:</title>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style>
title {
  font-size: 25px;
  font-weight: 500;
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
