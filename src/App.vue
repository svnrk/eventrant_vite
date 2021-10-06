

<template>
  <Header />
  <div class="container">
    <Events :events="events"/>
    
    

  </div>
</template>

<script >
import Header from './components/Header.vue'
import Events from './components/Events.vue'

export default{
  name: 'App',
  components: {
    Header,
    Events
  },
  data() {
    return {
      events: []
    }
  },
  created(){
    this.events = [
      {
        id: 1,
        event: 'Kalle sünnipäev',
        performer: 'Umbluu',
        location: 'Kolme Konna Trahter, Elva',
        date: '10.10.2021',
        time: '19.00',
        avg_rating: 0,
        ratings_count: 0,
      },
      {
        id: 2,
        event: 'Ice Off',
        performer: 'SKA Group ',
        location: 'Hall, Rakvere',
        date: '11.10.2021',
        time: '19.00',
        avg_rating: 0,
        ratings_count: 0,
      },
      {
        id: 3,
        event: 'Kuldkala 2021',
        performer: 'Kukerpillid',
        location: 'Järvejää, Viljandi',
        date: '10.12.2021',
        time: '13.00',
        avg_rating: 0,
        ratings_count: 0,
      },
      {
        id: 4,
        event: 'Olle sünnipäev',
        performer: 'Ruuds',
        location: 'Jzzi Lounge, Keila',
        date: '10.10.2022',
        time: '19.00',
        avg_rating: 0,
        ratings_count: 0,
      },
      {
        id: 5,
        event: 'Ice Off',
        performer: 'ENoi ',
        location: 'Hall, Rakvere',
        date: '11.10.2022',
        time: '19.00',
        avg_rating: 0,
        ratings_count: 0,
      },
      {
        id: 6,
        event: 'Kuldkala 2022',
        performer: 'Kukerpillid',
        location: 'Järvejää, Viljandi',
        date: '10.12.2022',
        time: '13.00',
        avg_rating: 0,
        ratings_count: 0,
      },
      
    ]
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Poppins');

* {
  /* background: #470000; */
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Poppins;
  color: whitesmoke;
}



.container{
  max-width: 900px;
  margin: 0px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid #2c3e50;
  padding: 10px;
  border-radius: 0px;
  background: #714040;
  
  

}
.btn {
  display: inline-block;
  border: 1px solid #2c3e50;
  padding: 1px 10px;
  margin: 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  background: #470000;
}
</style>
