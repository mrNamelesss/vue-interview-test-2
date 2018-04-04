<template>
  <div class="torque-profile-view">
    <h1>Torque Profile</h1>
    <OpenTorque />
  </div>
</template>

<script>
import OpenTorque from '@/components/OpenTorque.js'

export default {
  name: 'TorqueProfile',
  components: {
    OpenTorque
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

</style>
