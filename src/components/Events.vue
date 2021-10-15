<template>
    <div>
        <div :key='event.id' v-for="event in events">
            <Event :event='event' @reload="$emit('reload', event.id)"/>

        </div>

    </div>
</template>

<script>
import Event from './Event.vue'

export default {
  name: 'Events',
  emits: ['reload'],
  props: {
    events: Array
  },
  components: {
    Event
  }
}
</script>

<style>

</style>
