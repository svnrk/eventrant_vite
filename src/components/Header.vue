<template>
  <!-- <img alt="logo" src="../assets/logo1.png" width="200" /> -->
  <header>
    <h1 >eventrant</h1>
    <button @click="onClick()" class='btn'>nupp</button>    
  </header>
</template>

<script>
export default {
    name:'Header',
    methods:{
        onClick() {
            console.log('click')
        }
    }
}
</script>

<style scoped>
    header {
        max-width: 900px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        margin-left: auto;
        padding: 0px;
        padding-left: 10px;
        
    }
</style>