import BaseDrawer from "../BaseDrawer";
import { Options } from "../Options";
import BaseDetail from '../details/BaseDetail';


import DetailContact from "../details/DetailContact";


export default abstract class BaseElement extends BaseDrawer {

  public _number = 0;
  public _id = BaseElement._guid();

  init(options: Options | undefined) {
    super.init(options);

    if (options) {

      if (options.color) this.options.color = options.color;
      if (options.number) this._number = options.number;
    }

  }

  move() {
    const $el = document.getElementById(this.id);
    if ($el) {

      $el.style.transform = `translate(${this.offsetX}px,${this.offsetY}px)`;
      console.log($el.getBoundingClientRect());
    }
  }



  static _guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0,
        v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  guid() {
    return BaseElement._guid();
  }


  get number(): number {
    return this._number;
  }

  get id(): string {
    return this._id;
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
