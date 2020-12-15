import BaseDrawer from "../BaseDrawer";
import { Options } from "../Options";


export default abstract class BaseDetail extends BaseDrawer {


  init(options: Options | undefined) {
    super.init(options);
    this.options.color = options && options.color ? options.color : "#EEEEEE";
  }


}
