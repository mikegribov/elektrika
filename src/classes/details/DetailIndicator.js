
import BaseDetail from "@/classes/details/BaseDetail.js"

const left_down = 'left_down';
const left_up = 'left_up';
const right_down = 'right_down';
const right_up = 'right_up';
export default class DetailCorpus extends BaseDetail {
    constructor(options = false) {        
        super(options)        
        this.state = options && options.state ? options.state : 0;
        this.colorOff = options && options.colorOff ? options.colorOff : 'green';        
        this.colorOn = options && options.colorOn ? options.colorOn : 'red';                
        this.position = options && options.position ? options.position : left_down;                
        this.id = "DetailIndicator"
        
    }

    svg() {        
        //return `<rect x="${this.x + 2}" y="${this.placeHeight / 2 + 5}" width="5" height="3" stroke-width="${this.strokeWidth / 4}" : fill="state > 0 ? 'red': 'green'" stroke="${this.strokeColor}></rect>`         
        const w = 6; //width
        const h = 3; //height        
        let x = this.x + 3;
        if (this.position == right_down || this.position == right_up) {
            x += w - 1;
        }
        let y = this.y + this.placeHeight / 2 + 8;
        if (this.position == left_up || this.position == right_up) {
            y -= h + 16;
        }
        
        
        
        return `<rect x = "${x}" y = "${y}" width = "${w}" height = "${h}" stroke-width="${this.strokeWidth/4}" fill="${this.state > 0 ? 'red': 'green'}" stroke="${this.strokeColor}"></rect >`
            
        /*
        `
        <path d="M 3 50 h 5 v 3 h - 5 Z" : stroke-width="${this.strokeWidth / 4}" : fill="state > 0 ? 'red': 'green'" stroke="${this.strokeColor}" />          
        `
        */
    }
}