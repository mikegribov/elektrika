import BaseDrawer from "../BaseDrawer";
import { Options } from "../Options";
import BaseDetail from '../details/BaseDetail';


import DetailContact from "../details/DetailContact";


export default abstract class BaseElement extends BaseDrawer {

  readonly number = 1;

  init(options: Options | undefined) {
    super.init(options);
    this.options.color = options && options.color ? options.color : "#EEEEEE";
  }

  abstract content(): Array<Array<BaseDetail>>


  newDetail<T extends BaseDetail>(cl: new (options?: Options | undefined, owner?: BaseDrawer | undefined) => T, options?: Options): T {
    //const self: BaseDrawer = this;
    //console.log("newDetail: ", this)
    const obj = new cl(options, this);
    return obj;
  }


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
        shift++
      });
    });

    return result;
  }
}
