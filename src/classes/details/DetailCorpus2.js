import DetailCorpus from "@/classes/details/DetailCorpus.js"

export default class DetailCorpus2 extends DetailCorpus {
    constructor(options = false) {        
        super(options)                
        this.id = "DetailCorpus2"
    }

    getWidth() {
        return super.getWidth() * 2;
    }

}