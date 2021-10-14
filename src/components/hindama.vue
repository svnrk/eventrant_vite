<template>
<div>
  <div>
    <Dropmenu tekst="Sisesta üldine hinnang üritusele"/>
    <label for="">Hinda täpsemalt? </label>
    <input type="checkbox" id="checkbox" value="true" v-model="valik">
    <span>
      <button @click="write_console(' Salvestatud' )" class='btn' v-if="!valik">Salvesta</button>
    </span>
    <br>
  </div>
  <div v-if="valik">
    <Dropmenu tekst="Sisesta hinnang publikule"/>
    <Dropmenu tekst="Sisesta hinnang esitajale"/>
    <span>
      <button @click="write_console()" class='btn'>Salvesta</button>
    </span>
    <Dropmenu tekst="Sisesta hinnang korraldusele"/>
  </div>

  </div>
</template>

<script>

import Dropmenu from './Dropmenu.vue'

export default {
  name: 'Checkobx',
  components: { Dropmenu },

  data () {
    return {
      valik: false
    }
  },
  methods: {
    write_console (value) {
      console.log(value)
      alert('Salvestatud !')
    }
  }
}
</script>

<style scoped>
span {
    float: right;
    text-align: right;
}

</style>
