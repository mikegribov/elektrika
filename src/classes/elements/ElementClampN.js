
import ElementClamp from "@/classes/elements/ElementClamp.js"

export default class ElementClampN extends ElementClamp {

    constructor(options = false) {        
        super(options)                    
        this.id = "ElementClampN";        
        this.sqare = options && options.sqare ? options.sqare : 2.5; //4, 6, 10        
        this.caption = "ClampN-" + this.sqare;
        this.color = options && options.color ? options.color : "#3B7BC2";
    }

}