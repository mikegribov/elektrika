import BaseElement from "@/classes/drawers/elements/BaseElement";

import { Options } from "../Options";
import {
  DetailCorpus,
  DetailIndicator,
  DetailHandle,
  DetailContact
} from "../@Details";

export default class BaseBreaker extends BaseElement {
  constructor(options: Options | undefined) {
    super(options);
    this.options.label = "1P";
  }

  content() {
    return [
      [new DetailCorpus(), new DetailCorpus(), new DetailCorpus()],
      [new DetailIndicator(), new DetailIndicator(), new DetailIndicator()],
      [
        new DetailContact({ label: "1" } as Options),
        new DetailContact(),
        new DetailContact()
      ],
      [
        new DetailContact({ positionY: "down", label: "2" } as Options),
        new DetailContact({ positionY: "down" } as Options),
        new DetailContact({ positionY: "down" } as Options)
      ],
      [new DetailHandle({ places: 3 } as Options)]
    ];
  }
}
