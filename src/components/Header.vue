<template>
  <!-- <img alt="logo" src="../assets/logo1.png" width="200" /> -->
  <header>
    <h1 @click="goHome()">eventrant</h1>
    <button @click="goHome()" class='btn'>Kõik</button>    
    <button @click="myEvents()" class='btn'>Minu</button>    
    <button @click="addEvent()" class='btn'>Lisa</button>    
    <button @click="onClick()" class='btn'>nupp</button>    
  </header>
</template>s

<script>
export default {
    name:'Header',
    methods:{
        goHome(){
            console.log('home')
        },
        addEvent(){
            console.log('add')
        
        },
        myEvents(){
            console.log('my')
        },
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
        background: #370000;
        
    }
    h1 {
        background: #370000;
        cursor: pointer;
        align-items: right;
    }

</style>