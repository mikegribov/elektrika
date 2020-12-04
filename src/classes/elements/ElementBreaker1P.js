
import BaseBreaker from "@/classes/elements/BaseBreaker.js"

import { DetailCorpus, DetailIndicator, DetailHandle, DetailContact} from "@/classes/@Details"


export default class ElementBreaker1P extends BaseBreaker {

    constructor(options = false) {        
        super(options)            
        this.id = "ElementBreaker1P";
        this.caption="1P"
    }

    
    content() {
        return [
            [new DetailCorpus()],      
            [new DetailIndicator()],
            [new DetailContact({caption:'2'})],
            [new DetailContact({position:'down', caption:'1'})],
            [new DetailHandle()]
        ]
    }

}