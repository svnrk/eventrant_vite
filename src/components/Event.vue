<template>

  <div class='small_event' @click="selectEvent(event.id); toggle_event()">
    <div v-if ="!isOpen" >
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
      <div v-if="!rate_window">
        <span>
          <button class='btn' @click="open_rate_window()">Hinda</button>
        </span>
        <RatingBox :event="event"/>
      </div>

      <div v-if="rate_window">
        <span>
          <button class='btn' @click="open_rate_window()">Sulge</button>
        </span>
        <Checkbox />
      </div>
    
    </div>
  </div>

</template>

<script>
import Rating from './Rating.vue'
import Checkbox from './hindama.vue'
import RatingBox from './RatingBox.vue'

export default {
  components: { Rating, Checkbox, RatingBox },
  name: 'Event',
  props: {
    event: Object
  },

  data () {
    return {
      isOpen: false,
      rate_window: false
    }
  },

  methods: {
    selectEvent (id) {
      console.log(id)
    },

    toggle_event () {
      if (!this.rate_window) {
        if (this.isOpen === true) {
          this.isOpen = false
        } else {
          this.isOpen = true
        }
      }
    },

    open_rate_window () {
      if (this.rate_window === true) {
        this.rate_window = false
        // this.isOpen = false
      } else {
        this.rate_window = true
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
