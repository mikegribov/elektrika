import BaseDetail from "./BaseDetail";
import { Options } from "../Options";

export default class DetailHandle extends BaseDetail {
  constructor(options?: Options) {
    super(options);
    this.options.state = options && options.state ? options.state : 'off';
    this.options.color = options && options.color ? options.color : "#AAAAAA";
    this.options.places = options && options.places ? options.places : 1;
  }

  svg() {
    const colorShadow = this.changeColour(this.options.color, -0.5);
    let result = `
        <linearGradient id="handleGrad" x1="0" y1="0" x2="0" y2="100%">
            <stop offset="0%" stop-color="${this.options.color}"/>            
            <stop offset="100%" stop-color="${colorShadow}"/>
        </linearGradient>
        `;

    for (let i = 0; i < this.options.places; i++) {
      result += `
            <rect x = "${this.options.x + 3 + this.options.placeWidth * i}" y = "${this.options.y +
        this.options.placeHeight / 2 -
        5}" width = "${this.options.placeWidth - 6}" height = "10" stroke-width="${this.options.strokeWidth / 2}" fill="${this.options.color}" stroke="${this.options.strokeColor
        }"></rect >            
            `;
    }

    result += `        
        <rect x = "${this.options.x + 2}" y = "${this.options.y +
      this.options.placeHeight / 2 +
      2}" width = "${this.options.places * this.options.placeWidth -
      4}" height = "5" stroke-width="${this.options.strokeWidth /
      2}" fill="url(#handleGrad)" stroke="${this.options.strokeColor}"></rect >
        `;

    return result;
  }
}
