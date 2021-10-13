<template>
  <div>
      <div class="container">

        <Pealkiri>Lisa sündmus</Pealkiri>
    
        <Small_Text_header>Üritus:</Small_Text_header>
        <p style="white-space: pre-line; color: black">{{ message }}</p>
        <textarea v-model="message" placeholder="lisa üritus"></textarea>

        <Small_Text_header>Esineja:</Small_Text_header>
        <p style="white-space: pre-line;">{{ message }}</p>
        <textarea v-model="message" placeholder="lisa esineja(d)"></textarea>

        <Small_Text_header>Aeg:</Small_Text_header>
        <p style="white-space: pre-line;">{{ message }}</p>
        <textarea v-model="message" placeholder="lisa aeg"></textarea>

        <Small_Text_header>Koht:</Small_Text_header>
        <p style="white-space: pre-line;">{{ message }}</p>
        <textarea v-model="message" placeholder="lisa koht"></textarea>

        <Small_Text_header>Hinnang:</Small_Text_header>
        <!-- siia peaks tulema star-rating -->

        <Text>Lisa</Text>
      </div>

  </div>
</template>

<script>
export default {
  // name: AddEvent,

}
</script>

<style scoped>
  Pealkiri {
    font-size: 30px;
    font-weight: 600;
    color: white;
    text-align: center;
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
      /* color: rgb(172, 154, 154); */
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