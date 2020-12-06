<template>
    <svg xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :viewBox= "`0 0 ${width} ${height}`"        
        role="presentation"
    >
        <rect x="0" y="0" :width="width" :height="height" stroke-width="1" fill="#EEEEEE" stroke="#777777" ></rect>
        <g v-html="svgContent"></g>
        <use xlink:href="#ElementBreaker1P" x="5"  y="50"/>
        <use xlink:href="#ElementBreaker1PN" x="25"  y="50"/>
        <use xlink:href="#ElementBreaker3P" x="65"  y="50"/>
        <use xlink:href="#ElementBreaker3PN" x="120"  y="50"/>
        <use xlink:href="#ElementRcd" x="200"  y="50"/>
        <use xlink:href="#ElementRcd3" x="240"  y="50"/>
        <use xlink:href="#ElementClamp" x="320"  y="50"/>
        <use xlink:href="#ElementContacter1" x="330"  y="50"/>
        
        
    </svg>
</template>

<script>

    
    import ElementBreaker1P from '@/classes/elements/ElementBreaker1P.js'
    import ElementBreaker1PN from '@/classes/elements/ElementBreaker1PN.js'
    import ElementBreaker3P from '@/classes/elements/ElementBreaker3P.js'
    import ElementBreaker3PN from '@/classes/elements/ElementBreaker3PN.js'
    import ElementRcd from '@/classes/elements/ElementRcd.js'
    import ElementRcd3 from '@/classes/elements/ElementRcd3.js'
    import ElementClamp from '@/classes/elements/ElementClamp.js'
    import ElementContacter1 from '@/classes/elements/ElementContacter1.js'
    export default {
        data() {
            return {
                $_svgContent: "",

            }

        },

        
        props: {
            width: {
                type: [String, Number],
                default: 500
            },

            height: {
                type: [String, Number],
                default: 200
            },

            content: {
                type: String,
                default: ''
            }
        },

        methods: {
            getSvgContent() {
                if (!this.$_svgContent) {
                    this.$_svgContent = new ElementRcd().asSymbol() + new ElementRcd3().asSymbol() + new ElementClamp().asSymbol() + new ElementContacter1().asSymbol() +
                     + new ElementBreaker1P().asSymbol() + new ElementBreaker1PN().asSymbol() + new ElementBreaker3P().asSymbol() + new ElementBreaker3PN().asSymbol()
                }           
                return this.$_svgContent;
            }
        },
    mounted() {
        
    },
        computed: {
            svgContent: function() {
                
                return this.getSvgContent();
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>