
import BaseDetail from "@/classes/details/BaseDetail.js"

export default class DetailCorpus extends BaseDetail {
    constructor(options = false) {        
        super(options)        
        this.state = options && options.state ? options.state : 0;
        this.colorOff = options && options.colorOff ? options.colorOff : 'green';        
        this.colorOn = options && options.colorOn ? options.colorOn : 'red';                
        this.id = "DetailIndicator"
        
    }

    svg() {        
        //return `<rect x="${this.x + 2}" y="${this.placeHeight / 2 + 5}" width="5" height="3" stroke-width="${this.strokeWidth / 4}" : fill="state > 0 ? 'red': 'green'" stroke="${this.strokeColor}></rect>`         
        
        
        return `<rect x = "${this.x + 3}" y = "${this.y + this.placeHeight / 2 + 8}" width = "6" height = "3" stroke-width="${this.strokeWidth/4}" fill="${this.state > 0 ? 'red': 'green'}" stroke="${this.strokeColor}"></rect >`
            
        /*
        `
        <path d="M 3 50 h 5 v 3 h - 5 Z" : stroke-width="${this.strokeWidth / 4}" : fill="state > 0 ? 'red': 'green'" stroke="${this.strokeColor}" />          
        `
        */
    }
}