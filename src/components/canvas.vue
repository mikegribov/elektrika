<template>
    <svg xmlns="http://www.w3.org/2000/svg"
        :width="width"
        :height="height"
        :viewBox= "`0 0 ${width} ${height}`"        
        role="presentation"
    >
        <rect x="0" y="0" :width="width" :height="height" stroke-width="1" fill="#EEEEEE" stroke="#777777" ></rect>
        <g v-html="svgContent"></g>
        <use xlink:href="#ElementBreaker" x="5"  y="50"/>
    </svg>
</template>

<script>

    import DetailCorpus from '@/classes/details/DetailCorpus.js'
    import ElementBreaker from '@/classes/elements/ElementBreaker.js'
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
                    this.$_svgContent = new DetailCorpus().asSymbol() + new ElementBreaker().asSymbol()
                }
                console.log(this.$_svgContent)
                return this.$_svgContent;
            }
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