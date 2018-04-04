<template>
  <div class="torque-profile-view">
    <h3>Open</h3>
    <OpenTorque />
    <h3>Close</h3>
    <OpenTorque />
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">

</style>
