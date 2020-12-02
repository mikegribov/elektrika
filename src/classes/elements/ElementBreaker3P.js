import BaseBreaker from "@/classes/elements/BaseBreaker.js"
import DetailCorpus from "@/classes/details/DetailCorpus.js"
import DetailIndicator from "@/classes/details/DetailIndicator.js"
import DetailHandle from "@/classes/details/DetailHandle.js"
import DetailContact from "@/classes/details/DetailContact.js"

export default class ElementBreaker3P extends BaseBreaker {

    constructor(options = false) {        
        super(options)                    
        this.id = "ElementBreaker3P";
        this.caption="3P"
    }

    
    content() {
        return [
            [new DetailCorpus(), new DetailCorpus(), new DetailCorpus()],      
            [new DetailIndicator(), new DetailIndicator(), new DetailIndicator()],
            [new DetailContact(), new DetailContact(), new DetailContact()],
            [new DetailContact({position:'down'}), new DetailContact({position:'down'}), new DetailContact({position:'down'})],
            [new DetailHandle({places:3})]
        ]
    }

}