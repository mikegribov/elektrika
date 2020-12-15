import Base from "./BaseDrawer";
import { Options } from "./Options";

export default class DinRail extends Base {

  length = 350;
  height = 35;

  init(options: Options | undefined) {
    if (options && options.length) this.options.length = options.length;
    if (options && options.height) this.options.height = options.height;
  }


  svg(): string {
    const x0 = this.offsetX;
    const y0 = this.height / 2 + this.offsetY;
    const c = 27;
    const holeH = 6.5;
    //const step = 25
    const holeW = 18;
    const color = this.options.color;
    const color1 = this.changeColour(this.options.color, 0.5);

    return `

        <mask id="maskDinRailHole">
            <rect x="${x0 + 1}" y="${y0 -
      holeH / 2}"  width="${holeW}" height="${holeH}" rx="${holeH /
      2}" ry="${holeH / 2}"  stroke-width="0" fill="#FFFFFF"/>
        </mask>

        <rect x="${x0}" y="${y0 - this.height / 2}" width="${this.length
      }" height="${this.height}" stroke-width="${this.options.strokeWidth / 2}" stroke="${this.options.strokeColor
      }" fill="${color1}"/>
        <rect x="${x0}" y="${y0 - c / 2}" width="${this.length
      }" height="${c}" stroke-width="${this.options.strokeWidth / 2}" stroke="${this.options.strokeColor
      }" fill="${color}"/>
        `;
  }
}
