
interface IntOptions {
    x: number;
    y: number;
    placeWidth: number;
    placeHeight: number;
    width: number;
    height: number;
    color: string;
    strokeColor: string;
    strokeWidth: number;
    length: number;
    radius: number;
    positionX: TDirectionX;
    positionY: TDirectionY;
    label: string;
    state: TState;
    places: number;
    colorOn: string;
    colorOff: string;
    sqare: TCrossSqare;
    formula: string;
}

export type TDirectionX = 'left' | 'right' | 'center';
export type TCrossSqare = 1.5 | 2.5 | 4 | 6 | 10;
export type TDirectionY = 'up' | 'down' | 'middle';
export type TState = 'on' | 'off';

export class Options implements IntOptions {

    x = 0;
    y = 0;
    placeWidth = 17.5;
    placeHeight = 85;
    width = 1;
    height = 1;
    color = "#DDDDDD";
    strokeColor = "#333333";
    strokeWidth = 1;
    length = 350;
    radius = 3;
    positionX: TDirectionX = 'left';
    positionY: TDirectionY = 'up';
    label = '';
    state: TState = 'off';
    places = 1;
    colorOn = 'red';
    colorOff = 'green';
    sqare: TCrossSqare = 1.5;
    formula = '20';

    assign(value: IntOptions | undefined): void {

        if (value) {
            if (value.x !== undefined) this.x = value.x;
            if (value.y !== undefined) this.y = value.y;
            if (value.placeWidth !== undefined) this.placeWidth = value.placeWidth;
            if (value.placeHeight !== undefined) this.placeHeight = value.placeHeight;
            if (value.width !== undefined) this.width = value.width;
            if (value.height !== undefined) this.height = value.height;
            if (value.color !== undefined) this.color = value.color;
            if (value.strokeColor !== undefined) this.strokeColor = value.strokeColor;
            if (value.strokeWidth !== undefined) this.strokeWidth = value.strokeWidth;
            if (value.length !== undefined) this.length = value.length;
            if (value.radius !== undefined) this.radius = value.radius;
            if (value.positionX !== undefined) this.positionX = value.positionX;
            if (value.positionY !== undefined) this.positionY = value.positionY;
            if (value.label !== undefined) this.label = value.label;
            if (value.state !== undefined) this.state = value.state;
            if (value.places !== undefined) this.places = value.places;
            if (value.colorOn !== undefined) this.colorOn = value.colorOn;
            if (value.colorOff !== undefined) this.colorOff = value.colorOff;
            if (value.sqare !== undefined) this.sqare = value.sqare;
            if (value.formula !== undefined) this.formula = value.formula;

        }

        /*
        let name: keyof typeof options
        for (name in options) {
            //this[name] = options[name]
            const val = options[name];
            let v = null;
            switch (typeof (val)) {
                case 'string': {
                    v = <string>val;
                    break;
                };
                case 'number': {
                    v = <number>val;
                    break;
                };

            }
            
        }
        */
    }
}