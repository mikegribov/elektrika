import BaseBreaker from "./BaseBreaker";
import { Options } from "../Options";

import {
  DetailCorpus,
  DetailIndicator,
  DetailHandle,
  DetailContact
} from "../@Details";

export default class ElementBreaker1P extends BaseBreaker {
  constructor(options?: Options | undefined) {
    super(options);
    this.options.label = "1P";
  }

  content() {
    return [
      [new DetailCorpus()],
      [new DetailIndicator()],
      [new DetailContact({ label: "2" } as Options)],
      [new DetailContact({ positionY: "down", label: "1" } as Options)],
      [new DetailHandle()]
    ];
  }
}
