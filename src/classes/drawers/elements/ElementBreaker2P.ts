import BaseBreaker from "./BaseBreaker";
import { Options } from "../Options";
import {
  DetailCorpus,
  DetailIndicator,
  DetailHandle,
  DetailContact
} from "../@Details";

export default class ElementBreaker1PN extends BaseBreaker {
  constructor(options?: Options) {
    super(options);
    this.options.label = "2P";
  }

  content() {
    return [
      [new DetailCorpus(), new DetailCorpus()],
      [new DetailIndicator(), new DetailIndicator()],
      [
        new DetailContact({ label: "2" } as Options),
        new DetailContact({ label: "4" } as Options)
      ],
      [
        new DetailContact({ label: "1", positionY: "down" } as Options),
        new DetailContact({ positionY: "down", label: "3" } as Options)
      ],
      [new DetailHandle({ places: 2 } as Options)]
    ];
  }
}
