<template>
  <div id="app">
    {{ safelyStoredNumber }} <br>
    <button @click="add">Handle Generic Action</button> <br>
    <button @click="actionPromise">Handle Action with Promise</button> <br>
    <button @click="asyncAction">Handle Action with Async/Await</button> <br>
    <button @click="setStoredNumber('20')">Set to 20</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import store from './store'

export default {
  name: 'App',
  computed: {
    ...mapGetters([
      // Mounts the "safelyStoredNumber" getter to the scope of your component.
      'safelyStoredNumber'
    ])
  },
  methods: {
    ...mapMutations([
      // Mounts the "incrementStoredNumber" mutation to `this.incrementStoredNumber()`.
      'incrementStoredNumber',
      // Mounts the "setStoredNumber" mutation to `this.setStoredNumber(newNumber)`.
      'setStoredNumber'
    ]),
    ...mapActions({
      add: 'increment' // map `this.add()` to `this.$store.dispatch('increment')`
    }),
    actionPromise: function () {
      store.dispatch('actionA').then(() => {
        alert('Promise has been resolved')
      })
    },
    asyncAction: function () {
      store.dispatch('actionB').then(() => {
        alert('Returned from promise after dispatching async action (actionB)')
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
