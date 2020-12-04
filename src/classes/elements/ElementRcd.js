import BaseBreaker from "@/classes/elements/BaseBreaker.js"
import Empty from "@/classes/elements/Empty.js"
import DetailCorpus2 from "@/classes/details/DetailCorpus2.js"
import DetailIndicator from "@/classes/details/DetailIndicator.js"
import DetailHandle from "@/classes/details/DetailHandle.js"
import DetailContact from "@/classes/details/DetailContact.js"
import DetailButton from "@/classes/details/DetailButton.js"


export default class ElementRcd extends BaseBreaker {

    constructor(options = false) {        
        super(options)            
        this.id = "ElementRcd";
        this.caption="УЗО"
    }

    
    content() {        
        return [
            [new DetailCorpus2()],      
            [new DetailButton(), new DetailIndicator({ position: 'right_up' })],
            
            [new DetailContact({caption:'2'}), new DetailContact({caption:'N'})],
            [new DetailContact({position:'down', caption:'1'}), new DetailContact({position:'down', caption:'N'})],
            [new Empty(), new DetailHandle({})]
        ]
    }

}