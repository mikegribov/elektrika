<template>
  <svg
    @mouseDown="mouseDown"
    @mouseUp="mouseUp"
    @mouseMove="mouseMove"
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="`0 0 ${width} ${height}`"
    role="presentation"
  >
    <rect
      id="svg-canvas"
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

import ElementBreaker1P from "@/classes/drawers/elements/ElementBreaker1P";

import ElementBreaker1PN from "@/classes/drawers/elements/ElementBreaker1PN";
import ElementBreaker3P from "@/classes/drawers/elements/ElementBreaker3P";
import ElementBreaker3PN from "@/classes/drawers/elements/ElementBreaker3PN";
import ElementRcd from "@/classes/drawers/elements/ElementRcd";
import ElementRcd3 from "@/classes/drawers/elements/ElementRcd3";
import ElementClamp from "@/classes/drawers/elements/ElementClamp";
import ElementClampN from "@/classes/drawers/elements/ElementClampN";
import ElementClampE from "@/classes/drawers/elements/ElementClampE";
import ElementContacter1 from "@/classes/drawers/elements/ElementContacter1";

import DinRail from "@/classes/drawers/DinRail";

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
  elements = [
    new DinRail({ x: 5, y: 35 }),

    new ElementRcd({ x: 10, y: 10 }),
    new ElementRcd3({ x: 50, y: 10 }),
    new ElementClamp({ x: 130, y: 10 }),
    new ElementClampN({ x: 140, y: 10 }),
    new ElementClampE({ x: 150, y: 10 }),
    new ElementContacter1({ x: 160, y: 10 }),
    new ElementBreaker1P({ x: 180, y: 10 }),
    new ElementBreaker1PN({ x: 200, y: 10 }),
    new ElementBreaker3P({ x: 240, y: 10 }),
    new ElementBreaker3PN({ x: 300, y: 10 }),
  ];

  svgContent = "";

  getPosition({ x, y }) {
    const svgElement = document.getElementById("svg-canvas");
    const b = svgElement.getBoundingClientRect();
    x = x - Math.round(b.left + window.scrollX);
    y = y - Math.round(b.top + window.scrollY);
    return { x, y };
  }

  mouseDown(e) {
    const point = this.getPosition({ x: e.pageX, y: e.pageY });
    //console.log(point);
    for (let i = this.elements.length; i--; i >= 0) {
      const el = this.elements[i];
      const newDetail = el.newDetail(ElementBreaker3P);
      if (el.containsPoint(point.x, point.y)) {
        console.log("cliclOn: ", el.name);
        return;
      }
    }
    //console.log("mouseDown:", this.getPosition({ x: e.pageX, y: e.pageY }));
  }

  mouseUp(e) {
    //console.log("mouseUp:", e);
  }
  /*
  mouseMove(e) {
    
  }
  */

  getSvgContent() {
    if (!this.svgContent) {
      let svg = "";
      //new ElementBreaker1P({ x: 100, y: 50 }).svg();

      this.elements.forEach(function (el) {
        svg += el.asGroup();
      });

      this.svgContent = svg;
      /*
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
      */
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
