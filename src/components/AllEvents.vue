<template>
    <div>
        <Header />
        <div class="container">
            <Events :events="events"/>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue'
import Events from './Events.vue'

export default {
    name: "AllEvents",
    components: {
        Header,
        Events
    },

    data () {
        return {
        events: []
        }
    },
    created () {
        this.events = [
        {
            id: 1,
            event: 'Kalle sünnipäev',
            performer: 'Umbluu',
            location: 'Kolme Konna Trahter, Elva',
            date: '10.10.2021',
            time: '19.00',
            avg_rating: 0,
            ratings_count: 0
        },
        {
            id: 2,
            event: 'Ice Off',
            performer: 'SKA Group ',
            location: 'Hall, Rakvere',
            date: '11.10.2021',
            time: '19.00',
            avg_rating: 0,
            ratings_count: 0
        },
        {
            id: 3,
            event: 'Kuldkala 2021',
            performer: 'Kukerpillid',
            location: 'Järvejää, Viljandi',
            date: '10.12.2021',
            time: '13.00',
            avg_rating: 0,
            ratings_count: 0
        },
        {
            id: 4,
            event: 'Olle sünnipäev',
            performer: 'Ruuds',
            location: 'Jzzi Lounge, Keila',
            date: '10.10.2022',
            time: '19.00',
            avg_rating: 0,
            ratings_count: 0
        },
        {
            id: 5,
            event: 'Ice Off',
            performer: 'ENoi ',
            location: 'Hall, Rakvere',
            date: '11.10.2022',
            time: '19.00',
            avg_rating: 0,
            ratings_count: 0
        },
        {
            id: 6,
            event: 'Kuldkala 2022',
            performer: 'Kukerpillid',
            location: 'Järvejää, Viljandi',
            date: '10.12.2022',
            time: '13.00',
            avg_rating: 0,
            ratings_count: 0
        }

        ]
    }

}
</script>

<style>

</style>