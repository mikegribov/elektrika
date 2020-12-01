import BaseElement from "@/classes/elements/BaseElement.js"
import DetailCorpus from "@/classes/details/DetailCorpus.js"

export default class ElementBreaker extends BaseElement {

    constructor(options = false) {        
        super(options)
        this.color = options && options.color ? options.color : "#EEEEEE";        
        this.height = 85;                
        this.id = "ElementBreaker";
    }

    content() {
        return [
            [DetailCorpus, DetailCorpus],            
        ]
    }

    svg() {
        //const cl = DetailCorpus;
        //const d = new DetailCorpus();
        //const d = new cl({width: 2});
        //return d.svg();
        let result = '';
        const content = this.content();
        
        const self = this;
        content.forEach(function(layer) {
            let shift = 0;
            layer.forEach(function(el) {
                const x = shift * self.placeWidth;
                result += new el({x:x}).svg();
                shift++
            })
        })
        /*
        return `
        <use xlink:href="#DetailCorpus"/>
        
        `
        */
        return result;
    }
}