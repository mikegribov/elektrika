<template>
    <div>
      <BaseElement
      icon-name="write"
      width="50"
      height="100"
      scale="3"
      state="0"
      ></BaseElement>
    </div>
</template>
<script>
    import BaseElement from '@/components/elements/base-element.vue'
    export default {
        name: "element-automate",
        extends: BaseElement,        
        components: {
            BaseElement
        }
        
    }
</script>

<style lang="scss" scoped>

</style>