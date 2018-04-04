<template>
  <div class="home-view">
    <h1>Home</h1>
    <router-view/>
  </div>
</template>

<script>
import AssetHealth from '@/views/Home/AssetHealth/AssetHealth.vue'

export default {
  name: 'Home',
  components: {
    AssetHealth
  }
}
</script>

<style lang="sass">

</style>
