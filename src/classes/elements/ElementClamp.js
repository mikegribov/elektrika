
import BaseElement from "@/classes/elements/BaseElement.js"
import { DetailCorpusClamp, DetailContact } from "@/classes/@Details"

export default class ElementClamp extends BaseElement {

    constructor(options = false) {        
        super(options)                    
        this.id = "ElementClamp";        
        this.sqare = options && options.sqare ? options.sqare : 2.5; //4, 6, 10        
        this.caption = "Clamp-" + this.sqare;
    }

    content() {        
        const corpus = new DetailCorpusClamp({ sqare: this.sqare });
        return [
            [corpus],
            [new DetailContact({caption: '2', radius: 1.8, placeWidth: corpus.getWidth(), height: corpus.getHeight()/corpus.placeHeight})],
            [new DetailContact({ position: 'down', radius: 1.8, placeWidth: corpus.getWidth(), height: corpus.getHeight() / corpus.placeHeight, caption: '1' })],
            [new DetailContact({position: 'middle', radius: 1.5, placeWidth: corpus.getWidth(), height: corpus.getHeight()/corpus.placeHeight})],
        ]
    }

}