<template>
<div>    
  <svg xmlns="http://www.w3.org/2000/svg"
    :width="scale * width"
    :height="scale * height"
    :viewBox= "`0 0 ${width} ${height}`"    
    role="presentation"
  >
    <title></title>
  
    <rect :width="width" :height="height" rx="3" :stroke-width="strokeWidth" :fill="color1" stroke="rgb(0,0,0)"/>  
    <line x1="0" :x2="width" y1="20" y2="20" :stroke-width="strokeWidth/2" :fill="color1" stroke="rgb(0,0,0)"/>  
    <line x1="0" :x2="width" y1="65" y2="65" :stroke-width="strokeWidth/2" :fill="color1" stroke="rgb(0,0,0)"/>  
    <line x1="0" :x2="width" y1="30" y2="30" :stroke-width="strokeWidth/4" :fill="color1" stroke="rgb(0,0,0)"/>  
    <line x1="0" :x2="width" y1="55" y2="55" :stroke-width="strokeWidth/4" :fill="color1" stroke="rgb(0,0,0)"/>      
    <path :d="`M 4 35 h ${width - 8} v 13 h ${8 - width} Z`" :stroke-width="strokeWidth/4" :fill="color2" stroke="rgb(0,0,0)"/>  
    <path :d="`M 2 ${33 + (state > 0 ?  0 : 10) } h ${width - 4} v 5 h ${4 - width} Z`" :stroke-width="strokeWidth/4" :fill="color2" stroke="rgb(0,0,0)"/>
    
    <path :d="`M 3 50 h 5 v 3 h -5 Z`" :stroke-width="strokeWidth/4" :fill="state > 0 ? 'red': 'green'" stroke="rgb(0,0,0)"/>  
  
  
  </svg>

</div>  
</template>

<script>
const stdWidth = 17.5;
const stdHeight = 85;
export default {
  props: {
    state: {
      type: [Number, String],
      default: 0
    },
    color1: {
      type: String,
      default: "#FFFFFF"
    },
    color2: {
      type: String,
      default: "#DDDDDD"
    },

    scale: {
      type: [Number, String],
      default: 1
    },

    strokeWidth: {
      type: [Number, String],
      default: 2
    },

    dinWidth: {
      type: [Number, String],
      default: 1
    },
    iconName: {
      type: String,
      default: 'box'
    },
    
    iconColor: {
      type: String,
      default: 'currentColor'
    }
  },
  computed: {
    width() {
      return stdWidth * this.dinWidth
    },
    height() {
      return stdHeight
    }
  }
}


</script>

<style lang="scss" scoped>

</style>