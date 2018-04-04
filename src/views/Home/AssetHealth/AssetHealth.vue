<template>
  <div class="asset-health-view">
    <div class="top">
      Asset overview -> O Master-station 1-1
    </div>
    <nav class="tabs">
      <ul>
        <li>
          <a href="#" class="tab">Events</a>
        </li>
        <li>
          <a href="#" class="tab">Position</a>
        </li>
        <li>
          <a href="#" class="tab">Travel time</a>
        </li>
        <li>
          <router-link to="/torque-profile/18" class="tab active">Torque profile</router-link>
        </li>
        <li>
          <a href="#" class="tab">Work orders</a>
        </li>
        <li>
          <a href="#" class="tab">Alarm analytics</a>
        </li>
      </ul>
    </nav>
    <div class="main">
      <router-view/>
    </div>
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

<style lang="sass" scoped>
@import '../../../assets/styles/variables'

.asset-health-view
  box-shadow: 0 0 10px 5px rgba(0,0,0,0.1)

.top
  display: flex
  align-items: center
  height: $top-height
  background-color: $main-bg
  color: $main-text
</style>
