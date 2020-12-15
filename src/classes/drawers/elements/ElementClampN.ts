import ElementClamp from "./ElementClamp";
import { Options } from "../Options";

export default class ElementClampN extends ElementClamp {

  init(options: Options | undefined) {
    super.init(options);
    this.options.sqare = options && options.sqare ? options.sqare : 2.5; //4, 6, 10
    this.options.label = "ClampN-" + this.options.sqare;
    this.options.color = options && options.color ? options.color : "#3B7BC2";
  }

}
