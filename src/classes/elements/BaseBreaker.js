import BaseElement from "@/classes/elements/BaseElement.js"
import DetailCorpus from "@/classes/details/DetailCorpus.js"
import DetailIndicator from "@/classes/details/DetailIndicator.js"
import DetailHandle from "@/classes/details/DetailHandle.js"
import DetailContact from "@/classes/details/DetailContact.js"

export default class ElementBreaker extends BaseElement {

    constructor(options = false) {        
        super(options)
        this.color = options && options.color ? options.color : "#EEEEEE";        
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