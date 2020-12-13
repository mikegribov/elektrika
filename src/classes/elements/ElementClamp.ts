import BaseElement from "@/classes/elements/BaseElement";
import { Options } from "@/classes/Options";
import { DetailCorpusClamp, DetailContact } from "@/classes/@Details";

export default class ElementClamp extends BaseElement {
  constructor(options?: Options) {
    super(options);
    this.options.sqare = options && options.sqare ? options.sqare : 2.5; //4, 6, 10
    this.options.label = "Clamp-" + this.options.sqare;
    this.options.color = options && options.color ? options.color : "#AAAAAA";
  }

  content() {
    const corpus = new DetailCorpusClamp({
      sqare: this.options.sqare,
      color: this.options.color
    } as Options);
    return [
      [corpus],
      [
        new DetailContact({
          label: "2",
          radius: 1.8,
          placeWidth: corpus.getWidth(),
          height: corpus.getHeight() / corpus.options.placeHeight
        } as Options)
      ],
      [
        new DetailContact({
          positionY: "down",
          radius: 1.8,
          placeWidth: corpus.getWidth(),
          height: corpus.getHeight() / corpus.options.placeHeight,
          label: "1"
        } as Options)
      ],
      [
        new DetailContact({
          positionY: "middle",
          radius: 1.5,
          placeWidth: corpus.getWidth(),
          height: corpus.getHeight() / corpus.options.placeHeight
        } as Options)
      ]
    ];
  }
}
