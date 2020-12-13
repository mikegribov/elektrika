import BaseDetail from "./BaseDetail";
import { Options } from "../Options";


export default class DetailCorpus extends BaseDetail {
  constructor(options?: Options | undefined) {
    super(options);
    this.options.positionX = options && options.positionX ? options.positionX : 'left';
    this.options.positionY = options && options.positionY ? options.positionY : 'down';
  }

  svg() {
    //return `<rect x="${this.x + 2}" y="${this.placeHeight / 2 + 5}" width="5" height="3" stroke-width="${this.strokeWidth / 4}" : fill="state > 0 ? 'red': 'green'" stroke="${this.strokeColor}></rect>`
    const w = 6; //width
    const h = 3; //height
    let x = this.options.x + 3;
    if (this.options.positionX == 'right') {
      x += w - 1;
    }
    let y = this.options.y + this.options.placeHeight / 2 + 8;
    if (this.options.positionY == 'up') {
      y -= h + 16;
    }

    return `<rect x = "${x}" y = "${y}" width = "${w}" height = "${h}" stroke-width="${this
      .options.strokeWidth / 4}" fill="${this.options.state != 'off' ? "red" : "green"}" stroke="${this.options.strokeColor
      }"></rect >`;


  }
}
