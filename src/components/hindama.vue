<template>
<div>
  <div>
    <input type="checkbox" id="checkbox" value="true" v-model="valik">
    <label for="">Kas soovid hinnata täpsemalt?</label>
    <br>
    <Dropmenu tekst="Sisesta üldine hinnang üritusele"/>
  </div>
  <div v-if="valik">
    <Dropmenu tekst="Sisesta hinnang publikule"/>
    <Dropmenu tekst="Sisesta hinnang esitajale"/>
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
  }
}
</script>

<style scoped>

select option {

  margin: 40px;
  background: rgba(0, 0, 0, 0.3);
  color: rgb(0, 0, 0);
  text-shadow: 0 5px 0 rgba(0, 0, 0, 1);
}


</style>
