import Base from "@/classes/Base";
import { Options } from "@/classes/Options";

export default abstract class BaseDetail extends Base {
  constructor(options?: Options | undefined) {
    super(options);

    this.options.color = options && options.color ? options.color : "#EEEEEE";
  }


}
