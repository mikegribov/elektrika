import Base from "@/classes/Base";
import { Options } from "@/classes/Options";

export default class DinRail extends Base {

  length = 350;
  height = 35;

  constructor(options: Options) {
    super(options);
    this.options.length = options && options.length ? options.length : 350;
    this.options.height = options && options.height ? options.height : 35;

  }

  svg(): string {
    const y0 = this.height / 2;
    const c = 27;
    const holeH = 6.5;
    //const step = 25
    const holeW = 18;
    const color = this.options.color;
    const color1 = this.changeColour(this.options.color, 0.5);

    return `

        <mask id="maskDinRailHole">
            <rect x="1" y="${y0 -
      holeH / 2}"  width="${holeW}" height="${holeH}" rx="${holeH /
      2}" ry="${holeH / 2}"  stroke-width="0" fill="#FFFFFF"/>
        </mask>

        <rect x="0" y="${y0 - this.height / 2}" width="${this.length
      }" height="${this.height}" stroke-width="${this.options.strokeWidth / 2}" stroke="${this.options.strokeColor
      }" fill="${color1}"/>
        <rect x="0" y="${y0 - c / 2}" width="${this.length
      }" height="${c}" stroke-width="${this.options.strokeWidth / 2}" stroke="${this.options.strokeColor
      }" fill="${color}"/>
        `;
  }
}
