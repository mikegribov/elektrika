import BaseBreaker from "@/classes/elements/BaseBreaker.js"
import DetailCorpus from "@/classes/details/DetailCorpus.js"
import DetailIndicator from "@/classes/details/DetailIndicator.js"
import DetailHandle from "@/classes/details/DetailHandle.js"
import DetailContact from "@/classes/details/DetailContact.js"

export default class ElementBreaker1PN extends BaseBreaker {

    constructor(options = false) {        
        super(options)        
        this.id = "ElementBreaker1PN";
        this.caption="1P+N"
    }

    
    content() {
        return [
            [new DetailCorpus(), new DetailCorpus()],      
            [new DetailIndicator(), new DetailIndicator()],
            [new DetailContact(), new DetailContact({caption:'N'})],
            [new DetailContact({position:'down'}), new DetailContact({position:'down', caption:'N'})],
            [new DetailHandle({places:2})]
        ]
    }

}