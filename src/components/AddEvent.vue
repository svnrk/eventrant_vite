<template>
  <div>
    <div class="container">
      <br />
      <Pealkiri>Lisa sündmus</Pealkiri>
      <br />

      <div class="borders">
        <Small_Text_header>Üritus:</Small_Text_header>
        <p style="white-space: pre-line">{{ message_event }}</p>
        <textarea v-model="message_event" placeholder="lisa üritus"></textarea>

        <Small_Text_header>Esineja:</Small_Text_header>
        <p style="white-space: pre-line">{{ message_performer }}</p>
        <textarea
          v-model="message_performer"
          placeholder="lisa esineja(d)"
        ></textarea>

        <Small_Text_header>Aeg:</Small_Text_header>
        <p style="white-space: pre-line">{{ message_time }}</p>
        <textarea v-model="message_time" placeholder="lisa aeg"></textarea>

        <Small_Text_header>Koht:</Small_Text_header>
        <p style="white-space: pre-line">{{ message_place }}</p>
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
export default {
  methods: {
    adding: function (event) {
      alert("Uus sündmus on lisatud!");
    },
    async addEvent() {
      const newEvent = {
        event: this.message_event,
        performer: this.message_performer,
        date: this.message_time,
        location: this.message_place

      }
      console.log(newEvent)
      const res = await fetch('http://localhost:5000/events', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(newEvent)
      })
    }
  },
  data() {
    return {
      message_event: '',
      message_performer: '',
      message_time: '',
      message_place: ''


    }
  }
};
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
  font-size: 30px;
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