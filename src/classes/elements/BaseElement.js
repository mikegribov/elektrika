import Base from "@/classes/Base.js"

export default class BaseElement extends Base {
    constructor(options) {        
        super(options)
        this.id = options && options.id ? options.id : false;
        this.number=1
    }

    svg() {

    }



}