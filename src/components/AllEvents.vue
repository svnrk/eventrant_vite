<template>
    <div>
        <div class="container">
            <Events :events="filteredList"/>
            <h3>{{search}}</h3>
        </div>
    </div>
</template>

<script>
import Events from './Events.vue'


export default {
  name: 'AllEvents',
  components: {
    Events,
  },

  data () {
    console.log("data", this.search)
    return {
      events: [],
      filteredList: [],
      // search: ''
    }
  },
  props: {
    search: String
 
  },
  methods: {
    async fetchEvents () {
      const res = await fetch('http://localhost:5000/events')
      const data = await res.json()

      return data
    }
  },
  async created () {
    this.events = await this.fetchEvents()
    this.filteredList = this.getFilteredList()
    console.log(events)
  },
  computed: {
    getFilteredList() {
      return this.events.filter(event => {
        return event.event.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
}
</script>

<style>

</style>
