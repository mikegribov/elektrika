import BaseBreaker from "./BaseBreaker";
import { Options } from "../Options";

import {
  DetailCorpus,
  DetailIndicator,
  DetailHandle,
  DetailContact
} from "../@Details";

export default class ElementBreaker1P extends BaseBreaker {

  init(options: Options | undefined) {
    super.init(options);
    this.options.label = "1P";
    this._number = 2;
  }

  content() {
    return [
      [this.newDetail(DetailCorpus)],
      [this.newDetail(DetailIndicator)],
      [this.newDetail(DetailContact, { label: "2" } as Options)],
      [this.newDetail(DetailContact, { positionY: "down", label: "1" } as Options)],
      [this.newDetail(DetailHandle)]
    ]

  }
}
