import BaseBreaker from "@/classes/elements/BaseBreaker.js"
import { DetailCorpus, DetailIndicator, DetailHandle, DetailContact } from "@/classes/@Details"

export default class ElementBreaker1PN extends BaseBreaker {

    constructor(options = false) {        
        super(options)        
        this.id = "ElementBreaker2P";
        this.caption="2P"
    }

    
    content() {
        return [
            [new DetailCorpus(), new DetailCorpus()],      
            [new DetailIndicator(), new DetailIndicator()],
            [new DetailContact({caption:'2'}), new DetailContact({caption:'4'})],
            [new DetailContact({caption:'1', position:'down'}), new DetailContact({position:'down', caption:'3'})],
            [new DetailHandle({places:2})]
        ]
    }

}