<template>
    <div>
        <h2>{{yritus.event}}</h2>
        <span :v-show="image_path.length > 3">
          <img :src="this.image_path" />
        </span>

        <text>Esitaja: {{yritus.performer}}</text>
        <text>Kuupäev: {{yritus.date}}</text>
        <text>Kellaaeg: {{yritus.time}}</text>
        <text>Koht: {{yritus.location}}</text>

    </div>

</template>

<script>

export default {
  name: 'Rating',
  props: {
    yritus: Object
  },
  data () {
    return {
      image_path: ' '
    }
  },

  methods: {
    isValues (value) {
      if (value === 0) {
        return ' -'
      } else {
        return value
      }
    },
    async fetchImage (performer) {
      const res = await fetch('http://localhost:5000/performers')
      const data = await res.json()
      data.forEach(e => {
        if (performer === e.performer) {
          this.image_path = e.image
        }
        else {
          this.image_path = ' '
        }
      })
    },

  },

  async created () {
    console.log('begin')
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
    text {
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
