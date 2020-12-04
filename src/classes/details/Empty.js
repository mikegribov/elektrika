import Base from "@/classes/Base.js"

export default class Empty extends Base {
    constructor(options) {        
        super(options)
        this.id = options && options.id ? options.id : false;
        this.width = 1
    }

    svg() {

    }



}