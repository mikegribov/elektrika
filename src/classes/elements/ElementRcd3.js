import BaseBreaker from "@/classes/elements/BaseBreaker.js"
import {Empty, DetailCorpus4, DetailButton, DetailIndicator, DetailHandle, DetailContact } from "@/classes/@Details"


export default class ElementRcd3 extends BaseBreaker {

    constructor(options = false) {        
        super(options)            
        this.id = "ElementRcd3";
        this.caption="УЗО"
    }

    
    content() {        
        return [
            [new DetailCorpus4()],      
            [new Empty(), new Empty(), new DetailButton(), new DetailIndicator({ position: 'right_up' })],            
            [new DetailContact({caption: '2'}), new DetailContact({caption: '4'}), new DetailContact({caption: '6'}), new DetailContact({caption: 'N'})],
            [new DetailContact({position:'down', caption: '1'}), new DetailContact({position:'down', caption: '3'}), new DetailContact({position:'down', caption: '5'}), new DetailContact({position:'down', caption: 'N'})],
            [new Empty(), new Empty(), new Empty(), new DetailHandle({})]
        ]
    }

}