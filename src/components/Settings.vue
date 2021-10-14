<template>
  <div>
    <Header></Header>
    <div class="container">
      <tekst>My profile</tekst>
      <br />
      <tekst>Get Premium</tekst>
      <br />
      <tekst>Help</tekst>
      <br />
      <tekst>Sign out</tekst>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
export default {
  // name: AddEvent,
  components: {
    Header
  },
};
</script>

<style>
tekst {
  font-size: 20px;
  font-weight: 500;
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>