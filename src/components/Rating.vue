<template>
    <div>
        <h2>{{yritus.event}}</h2>
        <span :v-show="image_path.length > 3">
          <img :src="this.image_path" />
        </span>
        <Text>Esitaja: {{yritus.performer}}</Text>
        <Text>Kuupäev: {{yritus.date}}</Text>
        <Text>Kellaaeg: {{yritus.time}}</Text>
        <Text>Koht: {{yritus.location}}</Text>

        <Small_text_header>Hinnang</Small_text_header>
        <span>
          <Text1>Publik: {{isValues(yritus.public_rating)}}/5</Text1>
          <Text1>Korraldus: {{isValues(yritus.organization_rating)}}/5</Text1>
        </span>
        <Text1>Üldhinnang: {{isValues(yritus.avg_rating)}}/5</Text1>
        <Text1>Esineja: {{isValues(yritus.performer_rating)}}/5</Text1>
        <Text1>Arvustusi kokku: {{isValues(yritus.ratings_count)}}</Text1>
    </div>

</template>

<script>

export default {
  name: 'Rating',
  props: {
    yritus: Object
  },
  methods: {
    isValues (value) {
      console.log(value)
      if (value === 0) {
        return ' -'
      } 
      else {
        return value
      }
    },
    async fetchImage(performer){
      const res = await fetch("http://localhost:5000/performers")
      const data = await res.json()
      data.forEach(e => {
        if (performer === e.performer) {
          this.image_path =  e.image
        }
      })
    }

  },
  data () {
    return {
      image_path: " "
    }
  },

  async created() {
    console.log("begin")
    console.log(this.yritus.performer)
    this.image_path = await this.fetchImage(this.yritus.performer)
  }
}

</script>

<style scoped>
    header {
        color: rgb(255, 255, 255);
        justify-content: space-between;
        align-items: 'position';
        margin-bottom: 20px;
    }
    Text1 {
      color: aqua;
      display: flex;
      margin-bottom: 10px;
    }
    Text {
        font-size: 20px;
        color: rgb(172, 154, 154);
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
    img {
      width: 128px;
      height: 128px;
      border-radius: 10px;
      object-fit: cover;
    }

</style>
