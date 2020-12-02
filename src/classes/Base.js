export default  class Base {
    constructor(options = false) {
        this.placeWidth = 17.5
        this.placeHeight = 85
        this.width = 1
        this.height = 1
        this.strokeWidth = options && options.strokeWidth ? options.strokeWidth : 1;
        this.strokeColor = options && options.strokeColor ? options.strokeWidth : "#555555";
        this.id = false;
        
    }

    getWidth() {
        return this.placeWidth * this.width;
    }

    getHeight() {        
        return this.placeHeight * this.height;
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