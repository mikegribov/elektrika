import BaseDetail from "./BaseDetail";
import { Options } from "../Options";


export default class DetailButton extends BaseDetail {
  constructor(options?: Options | undefined) {
    super(options);
    this.options.radius = options && options.radius ? options.radius : 3;
    this.options.positionY = options && options.positionY ? options.positionY : "up";
    this.options.color = options && options.color ? options.color : "#AAAAAA";
    this.options.label = options && options.label ? options.label : "T";
  }

  svg(): string {
    const x = this.options.x + this.getWidth() / 2;
    const y = this.options.y + this.options.placeHeight / 2 + (this.options.positionY == 'down' ? 1 : -1) * 8;
    const h = 6;
    return `
        <g stroke-width="${this.options.strokeWidth / 2}" stroke="${this.options.strokeColor}" fill="${this.options.color}">
          <ellipse cx="${x}" cy="${y}" rx="6" ry="${h / 2}"  />                
          <text x="${x}" y="${y + h / 2 - 1}" text-anchor='middle' style="font-size:${h * 0.9}px; text-align: center; font-weight: bolder">${this.options.label}</text>        
        </g>
        `;
  }
}
