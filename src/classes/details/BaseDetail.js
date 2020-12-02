import Base from "@/classes/Base.js"

export default class BaseDetail extends Base {
    constructor(options) {        
        super(options)
        this.x = options && options.x ? options.x : 0;        
        this.y = options && options.y ? options.y : 0;
        this.color = options && options.color ? options.color : "#EEEEEE";
    }


    
    svg() {

    }
}