import BaseContacter from "@/classes/elements/BaseContacter";
import { Options } from "@/classes/Options";

export default class ElementContacter1 extends BaseContacter {
  constructor(options?: Options) {
    super(options);
    this.options.label = this.options.formula;
  }
}
