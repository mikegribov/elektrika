import BaseBreaker from "@/classes/elements/BaseBreaker.js"
import { DetailCorpus, DetailIndicator, DetailHandle, DetailContact } from "@/classes/@Details"


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
            [new DetailContact({caption:'2'}), new DetailContact({caption:'N'})],
            [new DetailContact({caption:'1', position:'down'}), new DetailContact({position:'down', caption:'N'})],
            [new DetailHandle({places:2})]
        ]
    }

}