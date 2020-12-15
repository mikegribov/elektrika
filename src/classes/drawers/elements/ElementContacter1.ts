import BaseContacter from "./BaseContacter";
import { Options } from "../Options";

export default class ElementContacter1 extends BaseContacter {

  init(options: Options | undefined) {
    super.init(options);
    this.options.label = this.options.formula;
  }

}
