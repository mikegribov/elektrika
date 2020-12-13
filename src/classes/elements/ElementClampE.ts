import ElementClamp from "@/classes/elements/ElementClamp";
import { Options } from "@/classes/Options";

export default class ElementClampE extends ElementClamp {
  constructor(options?: Options) {
    super(options);
    this.options.sqare = options && options.sqare ? options.sqare : 2.5; //4, 6, 10
    this.options.label = "ClampE-" + this.options.sqare;
    this.options.color = options && options.color ? options.color : "#DDDD2D";
  }
}
