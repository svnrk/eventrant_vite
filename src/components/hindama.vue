<template>
<div>
  <div>
    <Dropmenu tekst="Sisesta üldine hinnang üritusele"/>
    <label for="">Hinda täpsemalt? </label>
    <input type="checkbox" id="checkbox" value="true" v-model="valik">
    <br>
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

</style>
