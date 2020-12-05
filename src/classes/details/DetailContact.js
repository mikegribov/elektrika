
import BaseDetail from "@/classes/details/BaseDetail.js"

export default class DetailContact extends BaseDetail {
    constructor(options = false) {        
        super(options)                
        this.id = "DetailContact"
        this.radius = options && options.radius ? options.radius : 3;        
        this.position = options && options.position ? options.position : 'up';      // up, down
        this.caption = options && options.caption ? options.caption : '';
        
    }

    svg() {        
        
        const x = this.x + this.getWidth() / 2;
        const y = (this.position == 'middle' ? this.getHeight()/2 : (this.position == 'up' ? 3.5 * this.radius : this.getHeight()  - 3.5 * this.radius)) + (-this.getHeight() + this.placeHeight)/2;        
        const ty = this.position == 'up' ? y - this.radius -1 : y + 3 * this.radius;
        const t = 0.5;
        const r = this.radius - t;
        return `
        
        <circle cx="${x}" cy="${y}" r="${this.radius}" fill="${this.color}" stroke-width="${this.strokeWidth / 2}" stroke="${this.strokeColor}"/>        
        <polygon points="${x - t}, ${y - t} ${x - t}, ${y - r} ${x + t}, ${y - r} ${x + t}, ${y - t} ${x + r}, ${y - t} ${x + r}, ${y + t} ${x + t}, ${y + t} ${x + t}, ${y + r} ${x - t}, ${y + r} ${x - t}, ${y + t} ${x - r}, ${y + t} ${x - r}, ${y - t}" fill="${this.color}" stroke-width="${this.strokeWidth / 4}" stroke="${this.strokeColor}"/>
        <text x="${x}" y="${ty}" text-anchor='middle' fill="${this.strokeColor}" style="font-size:${this.radius * 2}px; text-align: center">${this.caption}</text>        
        `
    }
}