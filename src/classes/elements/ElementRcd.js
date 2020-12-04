import BaseBreaker from "@/classes/elements/BaseBreaker.js"
import {Empty, DetailCorpus2, DetailButton, DetailIndicator, DetailHandle, DetailContact } from "@/classes/@Details"



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