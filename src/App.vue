<template>
  <div id="app">
    <div>
    <Canvas width="1000" height="700"></Canvas>
    </div>
    <hr/>
    <element-automate
      icon-name="write"
      width="50"
      height="100"
      scale="3"
      state="0"
      ></element-automate>
      
    <hr/>

  </div>
</template>

<script>

//import BaseElement from './components/elements/base-element.vue'
import ElementAutomate from '@/components/elements/element-automate.vue'

import Canvas from '@/components/canvas'

export default {
  name: 'App',
  components: {
    ElementAutomate,
    Canvas
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
