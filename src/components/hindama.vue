<template>
  <div>
    <div>
      <!-- <Dropmenu tekst="Sisesta üldine hinnang üritusele" /> -->
      <div class="ratings">
        <h3> Hinnang </h3>
        <span>Üldhinnang </span>
        <span class="stars">
          <div class="rating" >
            <span :key="i" v-for="i in 5-this.avgValue" @click="avgRatingRecord(Math.abs(i-6))">☆</span>
            <span :key="i" v-for="i in this.avgValue" @click="avgRatingRecord(Math.abs(i-this.avgValue-1))">★</span>
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
          <span :key="i" v-for="i in 5-this.performerValue" @click="performerRatingRecord(Math.abs(i-6))">☆</span>
          <span :key="i" v-for="i in this.performerValue" @click="performerRatingRecord(Math.abs(i-this.performerValue-1))">★</span>
        </div>
      </span>
      <br>

      <span>Publik </span>
      <span class="stars">
        <div class="rating" >
          <span :key="i" v-for="i in 5-this.audienceValue" @click="audienceRatingRecord(Math.abs(i-6))">☆</span>
          <span :key="i" v-for="i in this.audienceValue" @click="audienceRatingRecord(Math.abs(i-this.audienceValue-1))">★</span>
        </div>
      </span>
      <br>

      <span>Korraldus </span>
      <span class="stars">
        <div class="rating" >
          <span :key="i" v-for="i in 5-this.orgValue" @click="organizationRatingRecord(Math.abs(i-6))">☆</span>
          <span :key="i" v-for="i in this.orgValue" @click="organizationRatingRecord(Math.abs(i-this.orgValue-1))">★</span>
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
// import Dropmenu from './Dropmenu.vue'

export default {
  name: 'Checkobx',
  components: {},
  emits: ['record-button'],

  data () {
    return {
      valik: false,
      avgValue: 0,
      performerValue: 0,
      audienceValue: 0,
      orgValue: 0
    }
  },
  props: {
    id: Number
  },
  methods: {
    avgRatingRecord (value) {
      this.avgValue = value
      console.log('avg', value)
    },
    performerRatingRecord (value) {
      this.performerValue = value
      console.log('performer', value)
    },
    audienceRatingRecord (value) {
      this.audienceValue = value
      console.log('audience', value)
    },
    organizationRatingRecord (value) {
      this.orgValue = value
      console.log('org', value)
    },
    async sendRatings () {
      console.log(this.id, this.avgValue, this.performerValue, this.audienceValue, this.orgValue)
      const eventToUpdate = await this.fetchEvent(this.id)

      const rc = eventToUpdate.ratings_count
      const tempAvgValue = (eventToUpdate.avg_rating * rc + this.avgValue) / (rc + 1)

      let tempPerformerRating = eventToUpdate.performer_rating
      let tempPublicRating = eventToUpdate.public_rating
      let tempOrganizationRating = eventToUpdate.organization_rating

      console.log('check', eventToUpdate.avg_rating, tempAvgValue)
      if (this.performerValue > 0) {
        tempPerformerRating = (eventToUpdate.performer_rating * rc + this.performerValue) / (rc + 1)
        tempPublicRating = (eventToUpdate.public_rating * rc + this.audienceValue) / (rc + 1)
        tempOrganizationRating = (eventToUpdate.organization_rating * rc + this.orgValue) / (rc + 1)
      }

      const tempRc = rc + 1

      const updatedEvent = {
        ...eventToUpdate,
        avg_rating: tempAvgValue,
        performer_rating: tempPerformerRating,
        public_rating: tempPublicRating,
        organization_rating: tempOrganizationRating,
        ratings_count: tempRc
      }

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

  }
}
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
