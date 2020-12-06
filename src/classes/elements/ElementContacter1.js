import BaseContacter from "@/classes/elements/BaseContacter.js"

export default class ElementContacter1 extends BaseContacter {

    constructor(options = false) {        
        super(options)        
        this.id = "ElementContacter1";
        this.caption = this.formula;
    }

    

}