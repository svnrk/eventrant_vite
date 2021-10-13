<template>
  <div>
        <h3> Hinnang </h3>
        <div class="rating_display">

            <span>
                <text>Publik: {{isValues(event.public_rating)}}/5</text>
                <text>Korraldus: {{isValues(event.organization_rating)}}/5</text>
                <text>Arvustusi kokku: {{isValues(event.ratings_count)}}</text>
            </span>
            <text>Üldhinnang: {{isValues(event.avg_rating)}}/5</text>
            <text>Esineja: {{isValues(event.performer_rating)}}/5</text>
            <text> </text>
        </div>
       
  </div>
</template>

<script>
export default {
    name: 'RatingBox',
    props: {
        event: Object
    },
    methods: {
        isValues (value) {
            if (value === 0) {
                return ' -'
            } 
            else {
                return value
            }
        }
    }

}
</script>

<style scoped>
h3 {
    font-weight: normal;
}
span {
      float: right;
      text-align: right;
    }
text {
        font-size: 15px;
        color: rgb(172, 154, 154);
        display: flex;
        justify-content: space-between;
        align-items: 'position';
        margin-bottom: 5px;
        padding-bottom: 1px;
    }
.rating_display {
    margin-bottom: 15px;
}
</style>