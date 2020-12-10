import Base from "@/classes/Base.js"

export default class DinRail extends Base {
    constructor(options) {        
        super(options)        
        this.id = "DinRail"        
        this.length = options && options.length ? options.length : 350;
        this.height = options && options.height ? options.height : 35;
        this.color = options && options.color ? options.color : "#DDDDDD";
    }


    
    svg() {
        const y0 = this.height / 2
        const c = 27
        const holeH = 6.5
        //const step = 25
        const holeW = 18
        return `

        <mask id="maskDinRailHole">
            <rect x="1" y="${y0 - holeH / 2}"  width="${holeW}" height="${holeH}" rx="${holeH/2}" ry="${holeH/2}"  stroke-width="0" fill="#FFFFFF"/>
        </mask>

        <rect x="0" y="${y0 - this.height / 2}" width="${this.length}" height="${this.height}" stroke-width="${this.strokeWidth / 2}" stroke="${this.strokeColor}" fill="#D0D0D0"/>
        <rect x="0" y="${y0 - c / 2}" width="${this.length}" height="${c}" stroke-width="${this.strokeWidth / 2}" stroke="${this.strokeColor}" fill="${this.color}"/>
        

        `
    }
}