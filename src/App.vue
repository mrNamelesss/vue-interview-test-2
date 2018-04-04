<template>
  <div id="app">
    <div class="dev">
      <button @click="toggleAll">Outline</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function() {
    return {
      styleId: null
    }
  },
  methods: {
    toggleAll() {
      this.toggleOutline()
    },
    toggleOutline() {
      if (this.styleId) {
        const style = document.getElementById(this.styleId)
        style.remove()
        this.styleId = null
      } else {
        const style = document.createElement('style')
        style.innerHTML = '* { outline: 1px solid rgba(0, 0, 0, 0.2); }'
        style.id = this.styleId = 'outline-style';
        document.head.append(style)
      }
    }
  }
}
</script>

<style lang="sass">
@import './assets/styles/main'

#app
  min-height: 100vh
  max-width: 1000px
  margin: auto

.dev
  position: absolute
  right: 0
  opacity: 0.05
  &:hover
    opacity: 0.7

</style>
