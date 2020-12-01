export default  class Base {
    constructor(options = false) {
        this.placeWidth = 17.5
        this.width = 1
        this.height = 85
        this.strokeWidth = options && options.strokeWidth ? options.strokeWidth : 1;
        this.strokeColor = options && options.strokeColor ? options.strokeWidth : "#333333";
        this.id = false;
        
    }

    getWidth() {
        return this.placeWidth * this.width;
    }

    getHeight() {
        return this.height ;
    }

    svg() {

    }


    asSymbol() {         
        return `<symbol${this.id ? " id=\"" + this.id + "\"" : ""}>
        ${this.svg()}
        </symbol>
        `
    }    
}