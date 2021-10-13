<template>
    <div>
        <div class="container">
            <Events :events="events"/>
        </div>
    </div>
</template>

<script>
import Events from './Events.vue'

export default {
  name: 'AllEvents',
  components: {
    Events
  },

  data () {
    return {
      events: []
    }
  },
  methods: {
    async fetchEvents(){
      const res = await fetch('http://localhost:5000/events')
      const data = await res.json()

      return data

    }
  }, 
  async created () {
    this.events = await this.fetchEvents()
    // this.events = [
    //   {
    //     id: 1,
    //     event: 'Kalle sünnipäev',
    //     performer: 'Umbluu',
    //     location: 'Kolme Konna Trahter, Elva',
    //     date: '10.10.2021',
    //     time: '19.00',
    //     avg_rating: 2,
    //     performer_rating: 4,
    //     public_rating: 2,
    //     organization_rating: 5,
    //     ratings_count: 6
    //   },
    //   {
    //     id: 2,
    //     event: 'Ice Off',
    //     performer: 'SKA Group ',
    //     location: 'Hall, Rakvere',
    //     date: '11.10.2021',
    //     time: '19.00',
    //     avg_rating: 1,
    //     performer_rating: 2,
    //     public_rating: Number,
    //     organization_rating: 5,
    //     ratings_count: 8
    //   },
    //   {
    //     id: 3,
    //     event: 'Kuldkala 2021',
    //     performer: 'Kukerpillid',
    //     location: 'Järvejää, Viljandi',
    //     date: '10.12.2021',
    //     time: '13.00',
    //     avg_rating: 5,
    //     performer_rating: 2,
    //     public_rating: Number,
    //     organization_rating: 4,
    //     ratings_count: 2
    //   },
    //   {
    //     id: 4,
    //     event: 'Olle sünnipäev',
    //     performer: 'Ruuds',
    //     location: 'Jzzi Lounge, Keila',
    //     date: '10.10.2022',
    //     time: '19.00',
    //     avg_rating: 2,
    //     performer_rating: Number,
    //     public_rating: Number,
    //     organization_rating: Number,
    //     ratings_count: Number
    //   },
    //   {
    //     id: 5,
    //     event: 'Ice Off',
    //     performer: 'ENoi ',
    //     location: 'Hall, Rakvere',
    //     date: '11.10.2022',
    //     time: '19.00',
    //     avg_rating: 1,
    //     performer_rating: Number,
    //     public_rating: Number,
    //     organization_rating: Number,
    //     ratings_count: Number
    //   },
    //   {
    //     id: 6,
    //     event: 'Kuldkala 2022',
    //     performer: 'Kukerpillid',
    //     location: 'Järvejää, Viljandi',
    //     date: '10.12.2022',
    //     time: '13.00',
    //     avg_rating: Number,
    //     performer_rating: Number,
    //     public_rating: Number,
    //     organization_rating: Number,
    //     ratings_count: Number
    //   }

    // ]
  }

}
</script>

<style>

</style>
