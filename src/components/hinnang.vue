<template>
    <div>
        <Small_text_header>{{yritus.event}}</Small_text_header>
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
        <Text1>Arvutusi kokku: {{isValues(yritus.ratings_count)}}</Text1>
    </div>

</template>

<script>

export default {
  name: 'Hinnang',
  props: {
    yritus: Object
  },
  data () {
    return {
    }
  },

  methods: {
    isValues (value) {
      if (value === Number) {
        return ' -'
      } else {
        return value
      }
    },

    open_add_window () {
      if (this.add_window === true) {
        this.add_window = false
        console.log(this.add_window)
      } else {
        this.add_window = true
        console.log(this.add_window)
      }
    }
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

</style>
