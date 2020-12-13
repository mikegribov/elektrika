import Base from "../BaseDrawer";
import { Options } from "../Options";

export default abstract class BaseDetail extends Base {
  constructor(options?: Options | undefined) {
    super(options);

    this.options.color = options && options.color ? options.color : "#EEEEEE";
  }


}
