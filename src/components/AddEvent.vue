<template>
  <div>
    <div class="container">
      <br />
      <Pealkiri>Lisa sündmus</Pealkiri>
      <br />

      <div class="borders">
        <Small_Text_header>Üritus:</Small_Text_header>
        <p style="white-space: pre-line; color: black">{{ message }}</p>
        <textarea v-model="message" placeholder="lisa üritus"></textarea>

        <Small_Text_header>Esineja:</Small_Text_header>
        <p style="white-space: pre-line">{{ message }}</p>
        <textarea v-model="message" placeholder="lisa esineja(d)"></textarea>

        <Small_Text_header>Aeg:</Small_Text_header>
        <!-- <p style="white-space: pre-line;">{{ message }}</p> -->
        <textarea v-model="message" placeholder="lisa aeg"></textarea>

        <Small_Text_header>Koht:</Small_Text_header>
        <p style="white-space: pre-line">{{ message }}</p>
        <textarea v-model="message" placeholder="lisa koht"></textarea>
        <br />
      </div>

      <br />

      <div id="adding">
        <div style="text-align: center">
          <button class="btn-info" v-on:click="adding">LISA</button>
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
  },
  // https://bootstrap-vue.org/docs/components/form-textarea
};
</script>

<style scoped>
.borders {
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
  font-weight: 600;
  align-items: center;
  display: flex;
  justify-content: center;
}
header {
  color: rgb(255, 255, 255);
  justify-content: space-between;
  align-items: "position";
  margin-bottom: 20px;
}
Text {
  font-size: 20px;
  font-weight: 500;
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  align-items: "position";
  margin-bottom: 15px;
}
Small_Text_header {
  font-size: 25px;
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  align-items: "position";
  margin-bottom: 15px;
}
span {
  float: right;
  text-align: right;
}
</style>