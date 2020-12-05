export default  class Base {
    constructor(options = false) {        
        this.placeWidth = options && options.placeWidth ? options.placeWidth : 17.5;
        this.placeHeight = options && options.placeHeight ? options.placeHeight : 85;        
        this.width = options && options.width ? options.width : 1;
        this.height = options && options.height ? options.height : 1;        
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