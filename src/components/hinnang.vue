<template>
    <div>
        <Small_text_header>{{yritus.event}}</Small_text_header>
        <Text>Esitaja: {{yritus.performer}}</Text>
        <Text>Kuupäev: {{yritus.date}}</Text>
        <Text>Kellaaeg: {{yritus.time}}</Text>
        <Text>Koht: {{yritus.location}}</Text>
        <Small_text_header>Hinnang</Small_text_header>
        <Text1>Üldhinnang: {{yritus.avg_rating}}/5</Text1>
        <Text1>Esineja: {{yritus.performer_rating}}/5</Text1>
        <Text1>Publik: {{yritus.public_rating}}/5</Text1>
        <Text1>Korraldus: {{yritus.organization_rating}}/5</Text1>
    </div>

</template>

<script>

export default {
  name: 'Hinnang',
  props: {
    yritus: Object
  }
}
</script>

<style scoped>
    header {
        text-align: left;
        color: rgb(255, 255, 255);
        justify-content: space-between;
        align-items: 'position';
        margin-bottom: 20px;
    }
    Text1 {
        text-align: left;
        color: aqua;
        display: flex;
        justify-content: space-between;
        align-items: 'position';
        margin-bottom: 10px;
    }
    Text {
        font-size: 20px;
        text-align: left;
        color: rgb(172, 154, 154);
        display: flex;
        justify-content: space-between;
        align-items: 'position';
        margin-bottom: 15px;
    }
    Small_Text_header {
        font-size: 25px;
        text-align: left;
        color: rgb(255, 255, 255);
        display: flex;
        justify-content: space-between;
        align-items: 'position';
        margin-bottom: 15px;
    }

</style>
