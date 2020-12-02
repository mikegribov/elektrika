import BaseBreaker from "@/classes/elements/BaseBreaker.js"
import DetailCorpus from "@/classes/details/DetailCorpus.js"
import DetailIndicator from "@/classes/details/DetailIndicator.js"
import DetailHandle from "@/classes/details/DetailHandle.js"
import DetailContact from "@/classes/details/DetailContact.js"

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