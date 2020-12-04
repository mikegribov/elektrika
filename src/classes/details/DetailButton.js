
import BaseDetail from "@/classes/details/BaseDetail.js"
const up = 'up';
const down = 'down';
export default class DetailButton extends BaseDetail {
    constructor(options = false) {        
        super(options)                
        this.id = "DetailButton"
        this.radius = options && options.radius ? options.radius : 3;        
        this.position = options && options.position ? options.position : up;      // up, down
        this.caption = options && options.caption ? options.caption : '';
        this.color = options && options.color ? options.color : '#AAAAAA';
        this.label = options && options.label ? options.label : 'T';
        
    }

    svg() {        
        
        const x = this.x + this.getWidth() / 2;
        const y = this.y + this.placeHeight / 2 + (this.position == down ? 1 : -1) * 8;        
        const h = 6;
        return `
        
        <ellipse cx="${x}" cy="${y}" rx="6" ry="${h/2}" stroke-width="${this.strokeWidth / 2}" stroke="${this.strokeColor}" fill="${this.color}" />                
        <text x="${x}" y="${y + h/2 - 1}" text-anchor='middle' fill="${this.strokeColor}" style="font-size:${h * 0.9}px; text-align: center; font-weight: bolder">${this.label}</text>        
        `
    }
}