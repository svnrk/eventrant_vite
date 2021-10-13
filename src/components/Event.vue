<template>

  <div class='small_event' @click="selectEvent(event.id); toggle_window()">
    <div v-if ="!isOpen">
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
    <div  v-if="isOpen">
      <Rating :yritus="event"/>
    </div>

  </div>

</template>

<script>
import Rating from './Rating.vue'

export default {
  components: { Rating },
  name: 'Event',
  props: {
    event: Object
  },

  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    selectEvent (id) {
      console.log(id)
    },

    toggle_window () {
      if (this.isOpen === true) {
        this.isOpen = false
      } else {
        this.isOpen = true
      }
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

.box {
  margin: 30px auto;
  overflow: auto;
  border: 1px solid #2c3e50;
  padding: 20px;
  border-radius: 10px;
  background-color: #473030;
  color: rgb(189, 180, 180);
}

</style>
