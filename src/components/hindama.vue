<template>
  <div>
    <div>
      <!-- <Dropmenu tekst="Sisesta üldine hinnang üritusele" /> -->
      <div class="ratings">
        <h3> Hinnang </h3>
        <span>Üldhinnang </span>
        <span class="stars">
          <div class="rating" >
            <span :key="i" v-for="i in 5-this.avg_value" @click="avgRatingRecord(Math.abs(i-6))">☆</span>
            <span :key="i" v-for="i in this.avg_value" @click="avgRatingRecord(Math.abs(i-this.avg_value-1))">★</span>
          </div>
        </span>
      </div>     

    </div>
    <div v-if="valik" class="ratings">
      <!-- <Dropmenu tekst="Sisesta hinnang publikule" />
      <Dropmenu tekst="Sisesta hinnang esitajale" />
      <Dropmenu tekst="Sisesta hinnang korraldusele" /> -->

      <span>Esineja </span>
      <span class="stars">
        <div class="rating" >
          <span :key="i" v-for="i in 5-this.performer_value" @click="performerRatingRecord(Math.abs(i-6))">☆</span>
          <span :key="i" v-for="i in this.performer_value" @click="performerRatingRecord(Math.abs(i-this.performer_value-1))">★</span>
        </div>
      </span>
      <br>

      <span>Publik </span>
      <span class="stars">
        <div class="rating" >
          <span :key="i" v-for="i in 5-this.audience_value" @click="audienceRatingRecord(Math.abs(i-6))">☆</span>
          <span :key="i" v-for="i in this.audience_value" @click="audienceRatingRecord(Math.abs(i-this.audience_value-1))">★</span>
        </div>
      </span>
      <br>

      <span>Korraldus </span>
      <span class="stars">
        <div class="rating" >
          <span :key="i" v-for="i in 5-this.org_value" @click="organizationRatingRecord(Math.abs(i-6))">☆</span>
          <span :key="i" v-for="i in this.org_value" @click="organizationRatingRecord(Math.abs(i-this.org_value-1))">★</span>
        </div>
      </span>
    </div>
    <label for="">Hinda täpsemalt? </label>
    <input type="checkbox" id="checkbox" value="true" v-model="valik" />
    <br>
    <button id=" kala" class='btn' @click="sendRatings()">Salvesta</button>
  </div>
</template>

<script>
import Dropmenu from "./Dropmenu.vue";

export default {
  name: "Checkobx",
  components: { Dropmenu },
  emits: ['record-button'],

  data() {
    return {
      valik: false,
      avg_value: 0,
      performer_value: 0,
      audience_value: 0,
      org_value: 0,
    };
  },
  props: {
    id: Number
  },
  methods: {
    avgRatingRecord(value) {
      this.avg_value = value
      console.log("avg", value);
    },
    performerRatingRecord(value) {
      this.performer_value = value
      console.log("performer", value);
    },
    audienceRatingRecord(value) {
      this.audience_value = value
      console.log("audience", value);
    },
    organizationRatingRecord(value) {
      this.org_value = value
      console.log("org", value);
    },
    async sendRatings() {
      console.log(this.id, this.avg_value, this.performer_value, this.audience_value, this.org_value)
      const eventToUpdate = await this.fetchEvent(this.id)

      const rc = eventToUpdate.ratings_count
      const temp_avg_value = (eventToUpdate.avg_rating * rc + this.avg_value) / (rc+1)

      let temp_performer_rating = eventToUpdate.performer_rating
      let temp_public_rating = eventToUpdate.public_rating
      let temp_organization_rating = eventToUpdate.organization_rating

      console.log("check",eventToUpdate.avg_rating, temp_avg_value)
      if(this.performer_value > 0) {
        temp_performer_rating = (eventToUpdate.performer_rating * rc + this.performer_value) / (rc+1)
        temp_public_rating = (eventToUpdate.public_rating * rc + this.audience_value) / (rc+1)
        temp_organization_rating = (eventToUpdate.organization_rating * rc + this.org_value) / (rc+1)
      }
      
      
      const temp_rc = rc+1

      const updatedEvent = {...eventToUpdate, 
        avg_rating: temp_avg_value, 
        performer_rating: temp_performer_rating, 
        public_rating: temp_public_rating, 
        organization_rating: temp_organization_rating,
        ratings_count: temp_rc}
      
      const res = await fetch(`http://localhost:5000/events/${this.id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updatedEvent)
      })
      this.$emit('record-button')
    },
    async fetchEvent (id) {

      const res = await fetch(`http://localhost:5000/events/${id}`)
      const data = await res.json()

      return data
    }

  },
};
</script>

<style scoped>
* {
  line-height: 27px;
}

h3 {
    font-weight: normal;
}
.ratings {
  width: 220px;
}
.stars {
  /* display: inline-block; */
  float: right;
}
.rating {
  unicode-bidi: bidi-override;
  direction: rtl;
}
.rating > span {
  display: inline-block;
  position: relative;
  width: 1.1em;

}
.rating > span:hover:before,
.rating > span:hover ~ span:before {
  content: "\2605";
  position: absolute;
}

</style>
