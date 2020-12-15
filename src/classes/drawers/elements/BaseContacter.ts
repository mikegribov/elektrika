import BaseElement from "./BaseElement";
import { Options } from "../Options";

import {
  DetailCorpus,
  DetailIndicator,
  DetailContact
} from "../@Details";

export default class BaseContacter extends BaseElement {

  init(options: Options | undefined) {
    super.init(options);
    this.options.formula = options && options.formula ? options.formula : "2O";
  }

  content() {
    const places = 1;
    const radiusK = 1;
    return [

      [this.newDetail(DetailCorpus, { width: places } as Options)],
      [this.newDetail(DetailIndicator)],
      [
        this.newDetail(DetailContact, {
          label: "1",
          height: 0.99,
          width: places / 2,
          radius: 1.9 * radiusK
        } as Options)
      ],
      [
        this.newDetail(DetailContact, {
          label: "3",
          height: 0.99,
          width: (places * 3) / 2,
          radius: 1.9 * radiusK
        } as Options)
      ],

      [
        this.newDetail(DetailContact, {
          label: "2",
          height: 0.99,
          width: places / 2,
          radius: 1.9 * radiusK,
          positionY: "down"
        } as Options)
      ],
      [
        this.newDetail(DetailContact, {
          label: "4",
          height: 0.99,
          width: (places * 3) / 2,
          radius: 1.9 * radiusK,
          positionY: "down"
        } as Options)
      ],

      [
        this.newDetail(DetailContact, {
          label: "A1",
          height: 0.82,
          width: places,
          radius: 2.2 * radiusK
        } as Options)
      ],
      [
        this.newDetail(DetailContact, {
          positionY: "down",
          label: "A2",
          height: 0.82,
          width: places,
          radius: 2.2 * radiusK
        } as Options)
      ]
    ];

    /*
    [new DetailCorpus({ width: places } as Options)],
    [new DetailIndicator()],
    [
      new DetailContact({
        label: "1",
        height: 0.99,
        width: places / 2,
        radius: 1.9 * radiusK
      } as Options)
    ],
    [
      new DetailContact({
        label: "3",
        height: 0.99,
        width: (places * 3) / 2,
        radius: 1.9 * radiusK
      } as Options)
    ],

    [
      new DetailContact({
        label: "2",
        height: 0.99,
        width: places / 2,
        radius: 1.9 * radiusK,
        positionY: "down"
      } as Options)
    ],
    [
      new DetailContact({
        label: "4",
        height: 0.99,
        width: (places * 3) / 2,
        radius: 1.9 * radiusK,
        positionY: "down"
      } as Options)
    ],

    [
      new DetailContact({
        label: "A1",
        height: 0.82,
        width: places,
        radius: 2.2 * radiusK
      } as Options)
    ],
    [
      new DetailContact({
        positionY: "down",
        label: "A2",
        height: 0.82,
        width: places,
        radius: 2.2 * radiusK
      } as Options)
    ]
  ];
  */
  }

  scheme() {
    const x0 = this.getWidth() / 2 - 1 + this.offsetX;
    const y0 = this.options.placeHeight / 2 - 10 + this.offsetY;

    return `
        <g stroke-width="${this.options.strokeWidth / 4}" stroke="${this.options.strokeColor}" fill="${this.options.color}">
        <rect x="${x0}" y="${y0 + 2}" width="3" height="5"  />
        <line x1="${x0 + 1.5}"  y1="${y0}" x2="${x0 + 1.5}"  y2="${y0 + 2}"/>
        <line x1="${x0 + 1.5}"  y1="${y0 + 7}" x2="${x0 + 1.5}"  y2="${y0 + 9}"/>

        <line x1="${x0 + 3}"  y1="${y0 + 4.5}" x2="${x0 + 8}"  y2="${y0 + 4.5}" style="stroke-dasharray: 1 1"/>
        <text x="${x0 + 0}" y="${y0 + 1.5}" text-anchor='middle' fill="${this.options.strokeColor}" style="font-size:2px; text-align: center">A1</text>        
        <text x="${x0 + 0}" y="${y0 + 9}" text-anchor='middle' fill="${this.options.strokeColor}" style="font-size:2px; text-align: center">A2</text>        

        <line x1="${x0 + 5}"  y1="${y0 + 6}" x2="${x0 + 5}"  y2="${y0 + 9}"/>
        <line x1="${x0 + 5}"  y1="${y0 + 6}" x2="${x0 + 4}"  y2="${y0 + 3}"/>
        <line x1="${x0 + 5}"  y1="${y0 + 3}" x2="${x0 + 5}"  y2="${y0}"/>
        <text x="${x0 + 4}" y="${y0 + 1.5}" text-anchor='middle' fill="${this.options.strokeColor}" style="font-size:2px; text-align: center">1</text>        
        <text x="${x0 + 4}" y="${y0 + 9}" text-anchor='middle' fill="${this.options.strokeColor}" style="font-size:2px; text-align: center">2</text>        

        
        <line x1="${x0 + 7}"  y1="${y0 + 6}" x2="${x0 + 7}"  y2="${y0 + 9}"/>
        <line x1="${x0 + 7}"  y1="${y0 + 6}" x2="${x0 + 6}"  y2="${y0 + 3}"/>
        <line x1="${x0 + 7}"  y1="${y0 + 3}" x2="${x0 + 7}"  y2="${y0}"/>
        <text x="${x0 + 6}" y="${y0 + 1.5}" text-anchor='middle' fill="${this.options.strokeColor}" style="font-size:2px; text-align: center">3</text>        
        <text x="${x0 + 6}" y="${y0 + 9}" text-anchor='middle' fill="${this.options.strokeColor}" style="font-size:2px; text-align: center">4</text>        

        </g>
        `;
  }

  svg() {
    return super.svg() + this.scheme();
  }
}
