import BaseDetail from "@/classes/details/BaseDetail.js"

//const listL = [41.5, 41.5, 42, 46];
const listH = [45.5, 45.5, 46, 46.5];
//const listh = [33, 33, 33.5, 42];
const listW = [5.4, 6.3, 8, 10.5];
const SQARES = [2.5, 4, 6, 10];

export default class DetailCorpusClamp extends BaseDetail {

    

    constructor(options = false) {        
        super(options)        
        this.id = "DetailCorpusClamp"        
        this.sqare = options && options.sqare ? options.sqare : 2.5; //4, 6, 10
        
    }

    getWidth() {
        const i = SQARES.findIndex(val => val == this.sqare);
        if (i > -1) {
            return listW[i];
        }
        
    }

    getHeight() {
        const i = SQARES.findIndex(val => val == this.sqare);
        if (i > -1) {
            return listH[i];
        }
        
    }

    svg() {
        const i = SQARES.findIndex(val => val == this.sqare);
        if (i > -1) {            
            const color = this.color;
            console.log(this.color)
            //const colorL = "#DD7777";
            //const colorD = "#774444";
            //const h = listh[i];            
            const W = this.getWidth()
            const H = this.getHeight()
            const PH = this.placeHeight;
            const x = this.x;
            const y = this.y - (H - PH)/2;
            const d1 =  5 / 2
            const d2 = 25 / 2            
            return `
                <rect x="${x}" y="${y}" width="${W}" height="${H}" rx="1" :stroke-width="${this.strokeWidth}" fill="${color}" stroke="${this.strokeColor}"/>        
                <line x1="${x}" x2="${x + W}" y1="${y + H / 2 - d1}" y2="${y + H / 2 - d1}" stroke-width="${this.strokeWidth / 2}" stroke="${this.strokeColor}"/>  
                <line x1="${x}" x2="${x + W}" y1="${y + H / 2 + d1}" y2="${y + H / 2 + d1}" stroke-width="${this.strokeWidth / 2}" stroke="${this.strokeColor}"/>  
                <line x1="${x}" x2="${x + W}" y1="${y + H / 2 - d2}" y2="${y + H / 2 - d2}" stroke-width="${this.strokeWidth / 4}" stroke="${this.strokeColor}"/>  
                <line x1="${x}" x2="${x + W}" y1="${y + H / 2 + d2}" y2="${y + H / 2 + d2}" stroke-width="${this.strokeWidth / 4}" stroke="${this.strokeColor}"/>      
            `
        }
    }
   
}