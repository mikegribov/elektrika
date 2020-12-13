import BaseBreaker from "./BaseBreaker";
import { Options } from "../Options";
import {
  Empty,
  DetailCorpus4,
  DetailButton,
  DetailIndicator,
  DetailHandle,
  DetailContact
} from "../@Details";

export default class ElementRcd3 extends BaseBreaker {
  constructor(options?: Options) {
    super(options);
    this.options.label = "УЗО";
  }

  content() {
    return [
      [new DetailCorpus4()],
      [
        new Empty(),
        new Empty(),
        new DetailButton(),
        new DetailIndicator({ positionX: "right", positionY: "up" } as Options)
      ],
      [
        new DetailContact({ label: "2" } as Options),
        new DetailContact({ label: "4" } as Options),
        new DetailContact({ label: "6" } as Options),
        new DetailContact({ label: "N" } as Options)
      ],
      [
        new DetailContact({ positionY: "down", label: "1" } as Options),
        new DetailContact({ positionY: "down", label: "3" } as Options),
        new DetailContact({ positionY: "down", label: "5" } as Options),
        new DetailContact({ positionY: "down", label: "N" } as Options)
      ],
      [new Empty(), new Empty(), new Empty(), new DetailHandle()]
    ];
  }
}
