import BaseDrawer from "../BaseDrawer";
import { Options } from "../Options";
import BaseDetail from "./BaseDetail";

export default class DetailContact extends BaseDetail {


  init(options: Options | undefined) {
    super.init(options);
    this.options.radius = options && options.radius ? options.radius : 3;
    this.options.positionY = options && options.positionY ? options.positionY : "up"; // up, down
    this.options.label = options && options.label ? options.label : "";
  }


  svg() {
    const x = this.offsetX + this.getWidth() / 2;
    const y = this.offsetY +
      (this.options.positionY == "middle"
        ? this.getHeight() / 2
        : this.options.positionY == "up"
          ? 3.5 * this.options.radius
          : this.getHeight() - 3.5 * this.options.radius) +
      (-this.getHeight() + this.options.placeHeight) / 2;
    const ty =
      this.options.positionY == "up" ? y - this.options.radius - 1 : y + 3 * this.options.radius;
    const t = 0.5;
    const r = this.options.radius - t;
    return `
        <g stroke-width="${this.options.strokeWidth / 2}" stroke="${this.options.strokeColor}" fill="${this.options.color}">

          <circle cx="${x}" cy="${y}" r="${this.options.radius}"/>        
          <polygon points="${x - t}, ${y - t} ${x - t}, ${y - r} ${x + t}, ${y -
      r} ${x + t}, ${y - t} ${x + r}, ${y - t} ${x + r}, ${y + t} ${x +
      t}, ${y + t} ${x + t}, ${y + r} ${x - t}, ${y + r} ${x - t}, ${y +
      t} ${x - r}, ${y + t} ${x - r}, ${y - t}" fill="${this.options.color}" stroke-width="${this.options.strokeWidth / 4}"/>
        
          <text x="${x}" y="${ty}" text-anchor='middle' fill="${this.options.strokeColor}" 
          style="font-size:${this.options.radius * 2}px; text-align: center">${this.options.label}</text>        
        </g>
        `;
  }
}
