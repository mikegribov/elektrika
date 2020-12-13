import BaseContacter from "./BaseContacter";
import { Options } from "../Options";

export default class ElementContacter1 extends BaseContacter {
  constructor(options?: Options) {
    super(options);
    this.options.label = this.options.formula;
  }
}
