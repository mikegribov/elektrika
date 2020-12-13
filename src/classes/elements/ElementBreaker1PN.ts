import BaseBreaker from "@/classes/elements/BaseBreaker";
import { Options } from "@/classes/Options";
import {
  DetailCorpus,
  DetailIndicator,
  DetailHandle,
  DetailContact
} from "@/classes/@Details";

export default class ElementBreaker1PN extends BaseBreaker {
  constructor(options?: Options | undefined) {
    super(options);
    this.options.label = "1P+N";
  }

  content() {
    return [
      [new DetailCorpus(), new DetailCorpus()],
      [new DetailIndicator(), new DetailIndicator()],
      [
        new DetailContact({ label: "2" } as Options),
        new DetailContact({ label: "N" } as Options)
      ],
      [
        new DetailContact({ label: "1", positionY: "down" } as Options),
        new DetailContact({ positionY: "down", label: "N" } as Options)
      ],
      [new DetailHandle({ places: 2 } as Options)]
    ];
  }
}
