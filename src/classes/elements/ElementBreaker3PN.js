import BaseBreaker from "@/classes/elements/BaseBreaker.js"
import DetailCorpus from "@/classes/details/DetailCorpus.js"
import DetailIndicator from "@/classes/details/DetailIndicator.js"
import DetailHandle from "@/classes/details/DetailHandle.js"
import DetailContact from "@/classes/details/DetailContact.js"

export default class ElementBreaker3PN extends BaseBreaker {

    constructor(options = false) {        
        super(options)                    
        this.id = "ElementBreaker3PN";
        this.caption="3P+N"
    }

    
    content() {
        return [
            [new DetailCorpus(), new DetailCorpus(), new DetailCorpus(), new DetailCorpus()],      
            [new DetailIndicator(), new DetailIndicator(), new DetailIndicator(), new DetailIndicator()],
            [new DetailContact({caption: '2'}), new DetailContact({caption: '4'}), new DetailContact({caption: '6'}), new DetailContact({caption: 'N'})],
            [new DetailContact({position:'down', caption: '1'}), new DetailContact({position:'down', caption: '3'}), new DetailContact({position:'down', caption: '5'}), new DetailContact({position:'down', caption: 'N'})],
            [new DetailHandle({places:4})]
        ]
    }

}