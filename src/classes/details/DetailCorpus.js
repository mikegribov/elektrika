import BaseDetail from "@/classes/details/BaseDetail.js"

export default class DetailCorpus extends BaseDetail {
    constructor(options = false) {        
        super(options)        
        this.color = options && options.color ? options.color : "#FEFEFE";
        this.id = "DetailCorpus"
    }

    svg() {
        const d1 =  45 / 2
        const d2 = 25 / 2
        const w = this.getWidth()
        const h = this.getHeight()
        const x = this.x;
        const y = this.y;
        return `
        <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="1" :stroke-width="${this.strokeWidth}" fill="${this.color}" stroke="${this.strokeColor}"/>        
        <line x1="${x}" x2="${x + w}" y1="${y + h/2-d1}" y2="${y + h/2-d1}" stroke-width="${this.strokeWidth/2}" stroke="${this.strokeColor}"/>  
        <line x1="${x}" x2="${x + w}" y1="${y + h/2 + d1}" y2="${y + h/2 + d1}" stroke-width="${this.strokeWidth/2}" stroke="${this.strokeColor}"/>  
        <line x1="${x}" x2="${x + w}" y1="${y + h/2 - d2}" y2="${y + h/2 - d2}" stroke-width="${this.strokeWidth/4}" stroke="${this.strokeColor}"/>  
        <line x1="${x}" x2="${x + w}" y1="${y + h/2 + d2}" y2="${y + h/2 + d2}" stroke-width="${this.strokeWidth/4}" stroke="${this.strokeColor}"/>      
        `
    }
}