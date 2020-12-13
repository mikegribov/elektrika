import BaseDetail from "@/classes/details/BaseDetail";
import { Options } from "@/classes/Options";

//const listL = [41.5, 41.5, 42, 46];
const listH = [45.5, 45.5, 46, 46.5];
//const listh = [33, 33, 33.5, 42];
const listW = [5.4, 6.3, 8, 10.5];
const SQARES = [2.5, 4, 6, 10];

export default class DetailCorpusClamp extends BaseDetail {
  constructor(options?: Options) {
    super(options);
    this.options.sqare = options && options.sqare ? options.sqare : 2.5; //4, 6, 10
  }

  getWidth() {
    const i = SQARES.findIndex(val => val == this.options.sqare);
    return listW[Math.max(0, i)];
  }

  getHeight() {
    const i = SQARES.findIndex(val => val == this.options.sqare);
    return listH[Math.max(0, i)];
  }

  svg() {
    //const i = Math.max(0, SQARES.findIndex(val => val == this.options.sqare));    
    const W = this.getWidth();
    const H = this.getHeight();
    const PH = this.options.placeHeight;
    const x = this.options.x;
    const y = this.options.y - (H - PH) / 2;
    const d1 = 5 / 2;
    const d2 = 25 / 2;
    return `
      <g stroke-width="${this.options.strokeWidth / 2}" stroke="${this.options.strokeColor}" fill="${this.options.color}">

                <rect x="${x}" y="${y}" width="${W}" height="${H}" rx="1"/>        
                <line x1="${x}" x2="${x + W}" y1="${y + H / 2 - d1}" y2="${y + H / 2 - d1}"/>  
                <line x1="${x}" x2="${x + W}" y1="${y + H / 2 + d1}" y2="${y + H / 2 + d1}"/>  

                <line x1="${x}" x2="${x + W}" y1="${y + H / 2 - d2}" y2="${y + H / 2 - d2}" stroke-width="${this.options.strokeWidth / 4}"/>  
                <line x1="${x}" x2="${x + W}" y1="${y + H / 2 + d2}" y2="${y + H / 2 + d2}" stroke-width="${this.options.strokeWidth / 4}""/>      

        </g>
            `;

  }
}
