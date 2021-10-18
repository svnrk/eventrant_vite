<template>
  <header>
    <h1 @click="goHome()" class="fix-stroke">eventrant</h1>
    <input
      type="text"
      v-model="search"
      name="search"
      v-on:keyup.enter="submit()"
      placeholder="Otsi..."
    />
    <div>
      <button @click="goHome()" class="btn">Kõik</button>
      <button @click="myEvents()" class="btn">Minu</button>
      <button @click="addEvent()" class="btn">Lisa</button>
      <button @click="goToSettings()" class="btn">Sätted</button>
      <router-link to="/"></router-link>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Header',
  emits: ['search-key'],
  methods: {
    goHome () {
      console.log('home')
      this.$emit('search-key', '')
      this.$router.push('/')
    },
    addEvent () {
      console.log('add')
      this.$router.push('addevent')
    },
    myEvents () {
      console.log('my')
      this.$router.push('myevent')
    },
    goToSettings () {
      console.log('click')
      this.$router.push('settings')
    },
    submit () {
      console.log('sending ', this.search)
      this.$emit('search-key', this.search)
      this.search = ''
      // this.$router.push('/')
    }
  },
  data () {
    return {
      search: ''
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

input[type="text"] {
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
  input[type="text"] {
    float: none;
    display: block;
    text-align: left;
    width: 100%;
    margin: 0;
    /* padding: 14px; */
  }

  input[type="text"] {
    border: 1px solid #ccc;
  }
}
</style>
