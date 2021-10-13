<template>
  <div>
      <div class="container">
        <br>
        <Pealkiri>Lisa sündmus</Pealkiri>

        <br>
        <Small_Text_header>Üritus:</Small_Text_header>
        <p style="white-space: pre-line; color: black">{{ message }}</p>
        <textarea v-model="message" placeholder="lisa üritus"></textarea>


        <Small_Text_header>Esineja:</Small_Text_header>
        <p style="white-space: pre-line;">{{ message }}</p>
        <textarea v-model="message" placeholder="lisa esineja(d)"></textarea>

        <Small_Text_header>Aeg:</Small_Text_header>
        <!-- <p style="white-space: pre-line;">{{ message }}</p> -->
        <textarea v-model="message" placeholder="lisa aeg"></textarea>

        <Small_Text_header>Koht:</Small_Text_header>
        <p style="white-space: pre-line;">{{ message }}</p>
        <textarea v-model="message" placeholder="lisa koht"></textarea>

        <!-- <br>
        <h1>testing</h1>
        <input type="text" placeholder="otsi" v-on:keyup.enter="submit">
        <h1>testing is over</h1> -->

        <div id="adding">
          <button v-on:click="greet">LISA</button>
        </div>
        
        <br>
      </div>

  </div>
</template>

<script>
export default {
  methods: {
    greet: function(event) {
      alert("Uus sündmus on lisatud!");
    }
  }
  // https://bootstrap-vue.org/docs/components/form-textarea
};
</script>

<style scoped>
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
      align-items: 'position';
      margin-bottom: 20px;
  }
  Text {
      font-size: 20px;
      font-weight: 500;
      color: rgb(255, 255, 255);
      display: flex;
      justify-content: space-between;
      align-items: 'position';
      margin-bottom: 15px;
  }
  Small_Text_header {
      font-size: 25px;
      color: rgb(255, 255, 255);
      display: flex;
      justify-content: space-between;
      align-items: 'position';
      margin-bottom: 15px;
  }
  span {
  float: right;
  text-align: right;
}

</style>