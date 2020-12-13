import Base from "../BaseDrawer";
import { Options } from "../Options";
import BaseDetail from '../details/BaseDetail';

export default abstract class BaseElement extends Base {

  readonly number = 1;

  constructor(options?: Options | undefined) {
    super(options);
    this.options.color = options && options.color ? options.color : "#EEEEEE";
  }

  abstract content(): Array<Array<BaseDetail>>

  svg() {
    let result = "";
    const content = this.content();

    const placeWidth = this.options.placeWidth;

    content.forEach(function (layer) {
      let shift = 0;
      layer.forEach(function (el) {
        const x = shift * placeWidth;
        el.options.x = x;
        result += el.svg();
        shift++;
      });
    });

    return result;
  }
}
