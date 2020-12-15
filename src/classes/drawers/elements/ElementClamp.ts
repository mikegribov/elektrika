import BaseElement from "./BaseElement";
import { Options } from "../Options";
import { DetailCorpusClamp, DetailContact } from "../@Details";

export default class ElementClamp extends BaseElement {

  init(options: Options | undefined) {
    super.init(options);
    this.options.sqare = options && options.sqare ? options.sqare : 2.5; //4, 6, 10
    this.options.label = "Clamp-" + this.options.sqare;
    this.options.color = options && options.color ? options.color : "#AAAAAA";
  }


  content() {
    const corpus = this.newDetail(DetailCorpusClamp, {
      sqare: this.options.sqare,
      color: this.options.color
    } as Options);
    return [
      [corpus],
      [
        this.newDetail(DetailContact, {
          label: "2",
          radius: 1.8,
          placeWidth: corpus.getWidth(),
          height: corpus.getHeight() / corpus.options.placeHeight
        } as Options)
      ],
      [
        this.newDetail(DetailContact, {
          positionY: "down",
          radius: 1.8,
          placeWidth: corpus.getWidth(),
          height: corpus.getHeight() / corpus.options.placeHeight,
          label: "1"
        } as Options)
      ],
      [
        this.newDetail(DetailContact, {
          positionY: "middle",
          radius: 1.5,
          placeWidth: corpus.getWidth(),
          height: corpus.getHeight() / corpus.options.placeHeight
        } as Options)
      ]
    ];
  }
}
