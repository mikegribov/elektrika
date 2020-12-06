import BaseElement from "@/classes/elements/BaseElement.js"

import { DetailCorpus, DetailIndicator, DetailHandle, DetailContact} from "@/classes/@Details"

export default class ElementBreaker extends BaseElement {

    constructor(options = false) {        
        super(options)        
        this.height = 85;                
        this.id = "ElementBreaker";
        this.caption="1P"
    }

    
    content() {
        return [
            [new DetailCorpus(), new DetailCorpus(), new DetailCorpus()],      
            [new DetailIndicator(), new DetailIndicator(), new DetailIndicator()],
            [new DetailContact({caption:'1'}), new DetailContact(), new DetailContact()],
            [new DetailContact({position:'down', caption:'2'}), new DetailContact({position:'down'}), new DetailContact({position:'down'})],
            [new DetailHandle({places:3})]
        ]
    }


}