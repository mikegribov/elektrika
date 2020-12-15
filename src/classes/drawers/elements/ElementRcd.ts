import BaseBreaker from "./BaseBreaker";
import { Options } from "../Options";

import {
  Empty,
  DetailCorpus2,
  DetailButton,
  DetailIndicator,
  DetailHandle,
  DetailContact
} from "../@Details";

export default class ElementRcd extends BaseBreaker {

  init(options: Options | undefined) {
    super.init(options);
    this.options.label = "УЗО";
  }

  content() {

    return [
      [this.newDetail(DetailCorpus2)],
      [this.newDetail(DetailButton), this.newDetail(DetailIndicator, { positionX: "right", positionY: "up" } as Options)],

      [
        this.newDetail(DetailContact, { label: "2" } as Options),
        this.newDetail(DetailContact, { label: "N" } as Options)
      ],
      [
        this.newDetail(DetailContact, { positionY: "down", label: "1" } as Options),
        this.newDetail(DetailContact, { positionY: "down", label: "N" } as Options)
      ],
      [this.newDetail(Empty), this.newDetail(DetailHandle)]
    ];

  }
}
