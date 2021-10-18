<template>
    <div>
        <Header @search-key="updateSearch"/>
        <div class="container">
            <Events :events="filteredList" @reload="this.reloading"/>
        </div>
    </div>
</template>

<script>
import Events from './Events.vue'
import Header from './Header.vue'

export default {
  name: 'AllEvents',
  components: {
    Events,
    Header
  },

  data () {
    console.log('data', this.search)
    return {
      events: [],
      filteredList: [],
      search: ''
    }
  },

  methods: {
    async fetchEvents () {
      console.log('fetch')
      const res = await fetch('http://localhost:5000/events')
      const data = await res.json()

      return data
    },
    async fetchEvent (id) {
      console.log('fetch', id)
      const res = await fetch(`http://localhost:5000/events/${id}`)
      const data = await res.json()

      return data
    },
    getFilteredList () {
      return this.events.filter(event => {
        console.log('filter', this.search)
        return event.event.toLowerCase().includes(this.search.toLowerCase()) ||
        event.performer.toLowerCase().includes(this.search.toLowerCase()) ||
        event.location.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    updateSearch (key) {
      console.log('search', key)
      this.search = key
      this.filteredList = this.getFilteredList()
    }
    // async reloading(){
    //   console.log("reloading")
    //   this.events = await this.fetchEvents()
    //   this.filteredList = this.getFilteredList()
    //   this.$forceUpdate()
    // }
  },
  async created () {
    console.log('create')
    this.events = await this.fetchEvents()
    this.filteredList = this.getFilteredList()
  }
}
</script>

<style>

</style>
