import BaseElement from "@/classes/elements/BaseElement.js"

import { DetailCorpus, DetailIndicator, DetailContact} from "@/classes/@Details"

export default class BaseContacter extends BaseElement {
    constructor(options) {        
        super(options)
        this.id = options && options.id ? options.id : false;
        this.formula = options && options.formula ? options.formula : "2O";        
    }


    content() {
        const places = 1;
        const radiusK = 1;
        return [
            [new DetailCorpus({width: places})],      
            [new DetailIndicator()],
            [new DetailContact({ caption: '1', height: 0.99, width: places/2, radius: 1.9 * radiusK })],
            [new DetailContact({ caption: '3', height: 0.99, width: places * 3/2, radius: 1.9 * radiusK })],

            [new DetailContact({ caption: '2', height: 0.99, width: places/2, radius: 1.9 * radiusK, position:'down'})],
            [new DetailContact({ caption: '4', height: 0.99, width: places * 3/2, radius: 1.9 * radiusK, position:'down'})],
            
            [new DetailContact({caption:'A1', height: 0.82, width: places, radius: 2.2 * radiusK})],
            [new DetailContact({position:'down', caption:'A2', height: 0.82, width: places, radius: 2.2 * radiusK})]            
        ]
    }

    scheme() {
        const x0 = this.getWidth()/2 - 1;
        const y0 = this.placeHeight / 2 - 10;
        

        return `
        <g>
        <rect x="${x0}" y="${y0 + 2}" width="3" height="5" stroke-width="${this.strokeWidth / 4}" stroke="${this.strokeColor}" fill="${this.color}" />
        <line x1="${x0 + 1.5}"  y1="${y0}" x2="${x0 + 1.5}"  y2="${y0 + 2}" stroke-width="${this.strokeWidth / 4}" stroke="${this.strokeColor}"/>
        <line x1="${x0 + 1.5}"  y1="${y0 + 7}" x2="${x0 + 1.5}"  y2="${y0 + 9}" stroke-width="${this.strokeWidth / 4}" stroke="${this.strokeColor}"/>

        <line x1="${x0 + 3}"  y1="${y0 + 4.5}" x2="${x0 + 8}"  y2="${y0 + 4.5}" stroke-width="${this.strokeWidth / 4}" stroke="${this.strokeColor}" style="stroke-dasharray: 1 1"/>
        <text x="${x0 + 0}" y="${y0 + 1.5}" text-anchor='middle' fill="${this.strokeColor}" style="font-size:2px; text-align: center">A1</text>        
        <text x="${x0 + 0}" y="${y0 + 9}" text-anchor='middle' fill="${this.strokeColor}" style="font-size:2px; text-align: center">A2</text>        

        <line x1="${x0 + 5}"  y1="${y0 + 6}" x2="${x0 + 5}"  y2="${y0 + 9}" stroke-width="${this.strokeWidth / 4}" stroke="${this.strokeColor}"/>
        <line x1="${x0 + 5}"  y1="${y0 + 6}" x2="${x0 + 4}"  y2="${y0 + 3}" stroke-width="${this.strokeWidth / 4}" stroke="${this.strokeColor}"/>
        <line x1="${x0 + 5}"  y1="${y0 + 3}" x2="${x0 + 5}"  y2="${y0}" stroke-width="${this.strokeWidth / 4}" stroke="${this.strokeColor}"/>
        <text x="${x0 + 4}" y="${y0 + 1.5}" text-anchor='middle' fill="${this.strokeColor}" style="font-size:2px; text-align: center">1</text>        
        <text x="${x0 + 4}" y="${y0 + 9}" text-anchor='middle' fill="${this.strokeColor}" style="font-size:2px; text-align: center">2</text>        

        
        <line x1="${x0 + 7}"  y1="${y0 + 6}" x2="${x0 + 7}"  y2="${y0 + 9}" stroke-width="${this.strokeWidth / 4}" stroke="${this.strokeColor}"/>
        <line x1="${x0 + 7}"  y1="${y0 + 6}" x2="${x0 + 6}"  y2="${y0 + 3}" stroke-width="${this.strokeWidth / 4}" stroke="${this.strokeColor}"/>
        <line x1="${x0 + 7}"  y1="${y0 + 3}" x2="${x0 + 7}"  y2="${y0}" stroke-width="${this.strokeWidth / 4}" stroke="${this.strokeColor}"/>
        <text x="${x0 + 6}" y="${y0 + 1.5}" text-anchor='middle' fill="${this.strokeColor}" style="font-size:2px; text-align: center">3</text>        
        <text x="${x0 + 6}" y="${y0 + 9}" text-anchor='middle' fill="${this.strokeColor}" style="font-size:2px; text-align: center">4</text>        

        </g>
        `
    }

    svg() {

        return super.svg() + this.scheme();
    }


}