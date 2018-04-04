<template>
  <div class="asset-health-view">
    <h1>Asset Health</h1>
    <router-view/>
  </div>
</template>

<script>
import TorqueProfile from '@/views/Home/AssetHealth/TorqueProfile/TorqueProfile.vue'

export default {
  name: 'AssetHealth',
  components: {
    TorqueProfile
  }
}
</script>

<style lang="sass">

</style>
