<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    role="presentation"
  >
    <rect
      x="0"
      y="0"
      :width="width"
      :height="height"
      stroke-width="1"
      fill="#EEEEEE"
      stroke="#777777"
    ></rect>

    <g v-html="getSvgContent()"></g>
    <use xlink:href="#DinRail" x="0" y="75" />

    <use xlink:href="#ElementBreaker1P" x="5" y="50" />
    <use xlink:href="#ElementBreaker1PN" x="25" y="50" />
    <use xlink:href="#ElementBreaker3P" x="65" y="50" />
    <use xlink:href="#ElementBreaker3PN" x="120" y="50" />
    <use xlink:href="#ElementRcd" x="200" y="50" />
    <use xlink:href="#ElementRcd3" x="240" y="50" />
    <use xlink:href="#ElementClamp" x="320" y="50" />
    <use xlink:href="#ElementClampN" x="330" y="50" />
    <use xlink:href="#ElementClampE" x="340" y="50" />
    <use xlink:href="#ElementContacter1" x="350" y="50" />
  </svg>
</template>

<script>
import { Options, Vue } from "vue-class-component";

import ElementBreaker1P from "@/classes/elements/ElementBreaker1P";

import ElementBreaker1PN from "@/classes/elements/ElementBreaker1PN";
import ElementBreaker3P from "@/classes/elements/ElementBreaker3P";
import ElementBreaker3PN from "@/classes/elements/ElementBreaker3PN";
import ElementRcd from "@/classes/elements/ElementRcd";
import ElementRcd3 from "@/classes/elements/ElementRcd3";
import ElementClamp from "@/classes/elements/ElementClamp";
import ElementClampN from "@/classes/elements/ElementClampN";
import ElementClampE from "@/classes/elements/ElementClampE";
import ElementContacter1 from "@/classes/elements/ElementContacter1";

import DinRail from "@/classes/DinRail";

@Options({
  props: {
    width: {
      type: [String, Number],
      default: 500,
    },

    height: {
      type: [String, Number],
      default: 200,
    },
  },
})
export default class Canvas extends Vue {
  svgContent = "";

  getSvgContent() {
    if (!this.svgContent) {
      this.svgContent =
        new DinRail({
          color: "#DDDDDD",
        }).asSymbol() +
        new ElementRcd().asSymbol() +
        new ElementRcd3().asSymbol() +
        new ElementClamp().asSymbol() +
        new ElementClampN().asSymbol() +
        new ElementClampE().asSymbol() +
        new ElementContacter1().asSymbol() +
        new ElementBreaker1P().asSymbol() +
        new ElementBreaker1PN().asSymbol() +
        new ElementBreaker3P().asSymbol() +
        new ElementBreaker3PN().asSymbol();
    }
    return this.svgContent;
  }
}

/*
export default {
  data() {
    return {
      $_svgContent: "",
    };
  },

  props: {
    width: {
      type: [String, Number],
      default: 500,
    },

    height: {
      type: [String, Number],
      default: 200,
    },

    content: {
      type: String,
      default: "",
    },
  },

  methods: {
    getSvgContent() {
      if (!this.$_svgContent) {
        this.$_svgContent =
          new DinRail().asSymbol() +
          new ElementRcd().asSymbol() +
          new ElementRcd3().asSymbol() +
          new ElementClamp().asSymbol() +
          new ElementClampN().asSymbol() +
          new ElementClampE().asSymbol() +
          new ElementContacter1().asSymbol() +
          new ElementBreaker1P().asSymbol() +
          new ElementBreaker1PN().asSymbol() +
          new ElementBreaker3P().asSymbol() +
          new ElementBreaker3PN().asSymbol();
      }
      return this.$_svgContent;
    },
  },
  mounted() {},
  computed: {
    svgContent: function() {
      return this.getSvgContent();
    },
  },
};

*/
</script>

<style lang="scss" scoped></style>
