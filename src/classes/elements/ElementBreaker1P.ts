import BaseBreaker from "@/classes/elements/BaseBreaker";
import { Options } from "@/classes/Options";

import {
  DetailCorpus,
  DetailIndicator,
  DetailHandle,
  DetailContact
} from "@/classes/@Details";

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
