
import ElementClamp from "@/classes/elements/ElementClamp.js"

export default class ElementClampE extends ElementClamp {

    constructor(options = false) {        
        super(options)                    
        this.id = "ElementClampE";        
        this.sqare = options && options.sqare ? options.sqare : 2.5; //4, 6, 10        
        this.caption = "ClampE-" + this.sqare;
        this.color = options && options.color ? options.color : "#DDDD2D";
    }

}