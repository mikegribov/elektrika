import DetailCorpus from "@/classes/details/DetailCorpus.js"

export default class DetailCorpus4 extends DetailCorpus {
    constructor(options = false) {        
        super(options)                
        this.id = "DetailCorpus4"
    }

    getWidth() {
        return super.getWidth() * 4;
    }

    
}