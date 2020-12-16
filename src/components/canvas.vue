<template>
  <svg
    @mouseDown="mouseDown"
    @mouseUp="mouseUp"
    @mouseMove="mouseMove"
    @click="mouseClick"
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
    new DinRail({ x: 5, y: 35, number: 1 }),
    new ElementRcd({ x: 10, y: 10, number: 2 }),
    new ElementRcd3({ x: 50, y: 10, number: 3 }),
    new ElementClamp({ x: 130, y: 10, number: 4 }),
    new ElementClampN({ x: 140, y: 10, number: 5 }),
    new ElementClampE({ x: 150, y: 10, number: 6 }),
    new ElementContacter1({ x: 160, y: 10, number: 7 }),
    new ElementBreaker1P({ x: 180, y: 10, number: 8 }),
    new ElementBreaker1PN({ x: 200, y: 10, number: 9 }),
    new ElementBreaker3P({ x: 240, y: 10, number: 10 }),
    new ElementBreaker3PN({ x: 300, y: 10, number: 11 }),
  ];

  dragged = null;
  dragStartPoint = null;
  dragShift = { x: 0, y: 0 };

  svgContent = "";

  getPosition({ x, y }) {
    const svgElement = document.getElementById("svg-canvas");
    const b = svgElement.getBoundingClientRect();
    x = x - Math.round(b.left + window.scrollX);
    y = y - Math.round(b.top + window.scrollY);
    return { x, y };
  }

  elementByPosition({ x, y }) {
    for (let i = this.elements.length; i--; i >= 0) {
      const el = this.elements[i];
      if (el.containsPoint(x, y)) {
        return el;
      }
    }
  }

  elementByPoint(point) {
    const el = this.elementByPosition(
      this.getPosition({ x: point.pageX, y: point.pageY })
    );
    return el;
  }

  mouseDown(e) {
    const el = this.elementByPoint(e);

    if (el) {
      this.offsetY = 200;
      el.move();

      this.dragged = el;
      this.dragStartPoint = e;
      const point = this.getPosition(e);
      this.dragShift = {
        x: point.x - this.dragged.offsetX,
        y: point.y - this.dragged.offsetY,
      };
    }
  }
  /*
  mouseClick(e) {
    const point = this.getPosition({ x: e.pageX, y: e.pageY });
    const el = this.elementByPosition(point);
    if (el) console.log(el.name);

    //console.log("mouseDown:", this.getPosition({ x: e.pageX, y: e.pageY }));
  }
*/
  mouseUp(e) {
    this.dragged = null;
  }

  mouseMove(e) {
    if (this.dragged) {
      const point = this.getPosition(e);
      this.dragged.offsetX = point.x - point.x;
      this.dragged.offsetY = point.y - point.y;
    }
  }

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

<style lang="scss">
.drawer {
  transition: 0.3s;
  /* transform: translate(200px, 200px); */
}

.drawer:hover {
  transform: translate(0, -2px);
}
</style>
