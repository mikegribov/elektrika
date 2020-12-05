import Base from "@/classes/Base.js"

export default class BaseElement extends Base {
    constructor(options) {        
        super(options)
        this.id = options && options.id ? options.id : false;
        this.number=1
    }


     content() {
        return [
            [],      
        ]
    }

    svg() {

        let result = '';
        const content = this.content();
        
        const self = this;

        content.forEach(function(layer) {
            let shift = 0;
            layer.forEach(function(el) {
                const x = shift * self.placeWidth;
                el.x = x;
                result += el.svg();
                shift++
            })
        })

        
        return result;
    }


}