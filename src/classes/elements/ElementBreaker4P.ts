import BaseBreaker from "@/classes/elements/BaseBreaker";
import { Options } from "@/classes/Options";
import {
  DetailCorpus,
  DetailIndicator,
  DetailHandle,
  DetailContact
} from "@/classes/@Details";

export default class ElementBreaker3PN extends BaseBreaker {
  constructor(options?: Options) {
    super(options);
    this.options.label = "4P";
  }

  content() {
    return [
      [
        new DetailCorpus(),
        new DetailCorpus(),
        new DetailCorpus(),
        new DetailCorpus()
      ],
      [
        new DetailIndicator(),
        new DetailIndicator(),
        new DetailIndicator(),
        new DetailIndicator()
      ],
      [
        new DetailContact({ label: "2" } as Options),
        new DetailContact({ label: "4" } as Options),
        new DetailContact({ label: "6" } as Options),
        new DetailContact({ label: "8" } as Options)
      ],
      [
        new DetailContact({ positionY: "down", label: "1" } as Options),
        new DetailContact({ positionY: "down", label: "3" } as Options),
        new DetailContact({ positionY: "down", label: "5" } as Options),
        new DetailContact({ positionY: "down", label: "7" } as Options)
      ],
      [new DetailHandle({ places: 4 } as Options)]
    ];
  }
}
