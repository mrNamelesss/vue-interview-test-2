<template>
  <div class="torque-profile-view">
    <template v-if="!id">
      <router-link to="18">Go to profile 18</router-link>
    </template>  
    <template v-else>
      <div v-if="!loading">
        <h3>Open</h3>
        <p>id = {{ id }}</p>
        <OpenTorque />
        <h3>Close</h3>
        <OpenTorque />
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
    </template>
  </div>
</template>

<script>
import OpenTorque from '@/components/OpenTorque.js'
import CloseTorque from '@/components/CloseTorque.js'

export default {
  name: 'TorqueProfile',
  components: {
    OpenTorque,
    CloseTorque
  },
  props: ['id'],
  data: function() {
    return {
      loading: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
h3
  color: #333
</style>
