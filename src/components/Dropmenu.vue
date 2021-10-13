<template>
    <div>
      <p>{{tekst}}</p>
        <select v-model="selected">
            <option value="" disabled selected>Vali hinne ...</option>
            <option v-for="option in options" :key="option.id" v-bind:value="option.id">
            {{option.value}}
            </option>
        </select>
        <p>{{valueprint(selected)}}</p>
  </div>
</template>

<script>
export default {
  name: 'Dropmenu',

  data () {
    return {
      text: '',
      selected: '',
      options: [
        { id: 1, value: 1 },
        { id: 2, value: 2 },
        { id: 3, value: 3 },
        { id: 4, value: 4 },
        { id: 5, value: 5 }
      ]
    }
  },
  props: {
    tekst: String
  },
  methods: {
    valueprint (value) {
      console.log(value)
    }
  }
}
</script>

<style>

select option {

  margin: 40px;
  background: rgba(0, 0, 0, 0.3);
  color: rgb(0, 0, 0);
  text-shadow: 0 5px 0 rgba(0, 0, 0, 1);
}

</style>
