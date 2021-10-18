<template>
  <div>
    <Header/>
    <div class="container">
      <Pealkiri>Lisa sündmus</Pealkiri>
      <br />

      <div class="borders">
        <Small_Text_header>Üritus:</Small_Text_header>
        <textarea v-model="message_event" placeholder="lisa üritus"></textarea>

        <Small_Text_header>Esineja:</Small_Text_header>
        <textarea
          v-model="message_performer"
          placeholder="lisa esineja(d)"
        ></textarea>

        <Small_Text_header>Aeg:</Small_Text_header>
        <textarea v-model="message_time" placeholder="lisa aeg"></textarea>

        <Small_Text_header>Koht:</Small_Text_header>
        <textarea v-model="message_place" placeholder="lisa koht"></textarea>
        <br />
      </div>

      <br />

      <div id="adding">
        <div style="text-align: center">
          <button class="btn-info" v-on:click="addEvent()">LISA</button>
        </div>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'
export default {
  components: {
    Header
  },
  methods: {
    async addEvent () {
      const newEvent = {
        event: this.message_event,
        performer: this.message_performer,
        date: this.message_time,
        location: this.message_place,
        avg_rating: 0,
        performer_rating: 0,
        audience_rating: 0,
        organization_rating: 0,
        ratings_count: 0
      }
      console.log(newEvent)
      const res = await fetch('http://localhost:5000/events', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(newEvent)
      })
      console.log('home')
      this.$router.push('/')
    }
  },
  data () {
    return {
      message_event: '',
      message_performer: '',
      message_time: '',
      message_place: ''
    }
  }
}
</script>

<style scoped>
.borders {
  color: black;
  border: 1px solid #2c3e50;
  margin: 5px auto;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
  max-width: 500px;
  background: #470000;
}

.btn-info {
  background: #4700005b;
  border: 1px solid #2c3e50;
  border-radius: 3px;
  color: whitesmoke;
  font-size: 18px;
  padding: 10px 20px;
}

Pealkiri {
  font-size: 25px;
  font-weight: 500;
  align-items: center;
  display: flex;
  justify-content: center;
}

Small_Text_header {
  font-size: 25px;
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  align-items: "position";
  margin-bottom: 15px;
}
</style>
