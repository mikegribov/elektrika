import BaseBreaker from "@/classes/elements/BaseBreaker.js"
import { DetailCorpus, DetailIndicator, DetailHandle, DetailContact } from "@/classes/@Details"

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
            [new DetailContact({caption: '2'}), new DetailContact({caption: '4'}), new DetailContact({caption: '6'})],
            [new DetailContact({position:'down', caption: '1'}), new DetailContact({position:'down', caption: '3'}), new DetailContact({position:'down', caption: '5'})],
            [new DetailHandle({places:3})]
        ]
    }

}