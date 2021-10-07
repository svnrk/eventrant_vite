
<template>
  <router-view/>
</template>

<script >

export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins');

* {
  /* background: #470000; */
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Poppins;
  color: whitesmoke;
}

.container{
  max-width: 900px;
  margin: 0px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid #2c3e50;
  padding: 10px;
  border-radius: 0px;
  background: #714040;

}
.btn {
  display: inline-block;
  border: 1px solid #2c3e50;
  padding: 1px 10px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  background: #470000;
}
</style>
