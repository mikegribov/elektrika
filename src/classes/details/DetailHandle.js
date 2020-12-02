
import BaseDetail from "@/classes/details/BaseDetail.js"

export default class DetailHandle extends BaseDetail {
    constructor(options = false) {        
        super(options)        
        this.state = options && options.state ? options.state : 0;                      
        this.id = "DetailHandle"
        this.color = options && options.color ? options.color : "#AAAAAA";
        this.colorShadow = options && options.colorShadow ? options.colorShadow : "#555555";
        this.places = options && options.places ? options.places : 1;        
        
    }

    svg() {        
        //return `<rect x="${this.x + 2}" y="${this.placeHeight / 2 + 5}" width="5" height="3" stroke-width="${this.strokeWidth / 4}" : fill="state > 0 ? 'red': 'green'" stroke="${this.strokeColor}></rect>`         
        
        let result =  `
        <linearGradient id="handleGrad" x1="0" y1="0" x2="0" y2="100%">
            <stop offset="0%" stop-color="${this.color}"/>            
            <stop offset="100%" stop-color="${this.colorShadow}"/>
        </linearGradient>
        `;

        for (let i = 0; i < this.places; i ++) {
            result += `
            <rect x = "${this.x + 3 + this.placeWidth * i}" y = "${this.y + this.placeHeight / 2 - 5}" width = "${this.placeWidth - 6}" height = "10" stroke-width="${this.strokeWidth / 2}" fill="${this.color}" stroke="${this.strokeColor}"></rect >            
            `
        }

        result += `        
        <rect x = "${this.x + 2}" y = "${this.y + this.placeHeight / 2 + 2}" width = "${this.places * this.placeWidth - 4}" height = "5" stroke-width="${this.strokeWidth / 2}" fill="url(#handleGrad)" stroke="${this.strokeColor}"></rect >
        `
            
        return result;
    }
}