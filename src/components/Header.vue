<template>
  <!-- <img alt="logo" src="../assets/logo1.png" width="200" /> -->
  <header>
    <h1 @click="$router.push('/')" class="fix-stroke">eventrant</h1>
    <input type="text" placeholder="Otsi.." v-on:keyup.enter="submit">
    <div>
        <button @click="$router.push('/')" class='btn'>Kõik</button>
        <button @click="myEvents()" class='btn'>Minu</button>
        <button @click="$router.push('addevent')" class='btn'>Lisa</button>
        <button @click="onClick()" class='btn'>nupp</button>
        <router-link to="/"></router-link>
    </div>
  </header>
</template>s

<script>
export default {
  name: 'Header',
  methods: {
    goHome () {
      console.log('home')
    },
    addEvent () {
      console.log('add')
    },
    myEvents () {
      console.log('my')
    },
    onClick () {
      console.log('click')
    },
    submit () {
      console.log('otsi')
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

        background: #370000;

    }

    h1 {
        background: #370000;
        cursor: pointer;
        align-items: right;
        padding-left: 20px;
        padding-right: 20px;
        -webkit-text-stroke: 0px #2c3e50;
    }

    input[type=text] {
        float: right;
        padding: 3px 10px;
        border: none;
        color: #2c3e50;
        max-width: 200px;

        /* margin-top: 8px;
        margin-left: 16px;
        font-size: 17px; */
    }

    @media screen and (max-width: 700px) {
    input[type=text] {
        float: none;
        display: block;
        text-align: left;
        width: 100%;
        margin: 0;
        /* padding: 14px; */
    }

    input[type=text] {
        border: 1px solid #ccc;
    }
}

</style>
