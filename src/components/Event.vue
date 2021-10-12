<template>
  <div  class='small_event' @click="selectEvent(event.id)">
    <h3>{{event.event}}</h3>
    <span>
        <p>
            {{event.performer}}
        </p>
        <p id="location">
            {{event.location}}
        </p>
    </span>
    <p>
        {{event.date}}, {{event.time}}
    </p>
  </div>

</template>

<script>

export default {
  name: 'Event',
  props: {
    event: Object
  },
  methods: {
    selectEvent (id) {
      console.log(id)
      this.selected = id
    }
  },
  data () {
    return {
      selected: 0
    }
  }
}
</script>

<style scoped>
.small_event {
    border: 1px solid #2c3e50;
    margin: 5px auto;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    max-width: 500px;
    background: #470000;
}

.large_event {
    border: 1px solid #2c3e50;
    margin: 5px auto;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    max-width: 500px;
    background: #000000;
}

h3 {
    display: inline-block;
}

span {
    float: right;
    text-align: right;
}
</style>
