<template>
  <div class="home-view">
    <header>
      <h1>Predictive maintenance</h1>
      <div class="controls">
        <a href="#" class="user">John Smith v</a>
        <a href="#" class="power">O</a>
      </div>
    </header>
    <section>
      <div v-if="overviewShow" class="overview">
        <div class="top">
          <div class="title">
            <a href="#">A</a>
            <h3>Terminal overview</h3>
          </div>
          <a href="#" class="toggle-overview">W</a>
        </div>
        <img src="https://picsum.photos/600/400" />
        <div class="overview-text">
          Terminal name
          West
          Country code
          NLD
          Adress
        </div>
      </div>
      <div class="main">
        <div class="top">
          <a v-if="!overviewShow" :click="overviewShow = !overviewShow" href="#" class="toggle-overview">W</a>
          <nav class="tabs">
            <ul>
              <li>
                <a href="#" class="tab">Dashboard</a>
              </li>
              <li>
                <router-link to="/asset-health" class="tab active">Asset health</router-link>
              </li>
              <li>
                <a href="#" class="tab">Work orders</a>
              </li>
            </ul>
          </nav>
        </div>
        <div class="content">
          <router-view/>
        </div>
    </div>
    </section>
  </div>
</template>

<script>
import AssetHealth from '@/views/Home/AssetHealth/AssetHealth.vue'

export default {
  name: 'Home',
  components: {
    AssetHealth
  },
  data: function() {
    return {
      overviewShow: true
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../../assets/styles/variables'

.home-view
  display: flex
  flex-direction: column
  min-height: 100vh
  margin: auto

header
  display: flex
  justify-content: space-between
  padding: 10px 0
h1
  margin: 0 0 0 4em
  padding: 0.5em 0 0.5em 1em
  border-left: 1px solid $text
.user
  margin: 0 20px 0 0
  text-decoration: none

section
  display: flex
  flex-grow: 1
.overview
  width: 250px
  border-right: 1px solid $border-color
  .top
    display: flex
    justify-content: space-between
    align-items: center
    height: $top-height
    background-color: $main-bg
    color: $main-text
    padding: 0.8em
    .title
      display: flex
      align-items: center


.main
  flex-grow: 1
  .top
    display: flex
    align-items: center
    height: $top-height
    background-color: $bg-light
    border-bottom: 1px solid $border-color
    border-top: 1px solid $border-color
  .content
    padding: 20px

</style>
