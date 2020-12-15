import BaseBreaker from "./BaseBreaker";
import { Options } from "../Options";
import {
  DetailCorpus,
  DetailIndicator,
  DetailHandle,
  DetailContact
} from "../@Details";

export default class ElementBreaker1PN extends BaseBreaker {

  init(options: Options | undefined) {
    super.init(options);
    this.options.label = "2P";
    this.options.width = 2;
  }

  content() {
    return [
      [this.newDetail(DetailCorpus), this.newDetail(DetailCorpus)],
      [this.newDetail(DetailIndicator), this.newDetail(DetailIndicator)],
      [
        this.newDetail(DetailContact, { label: "2" } as Options),
        this.newDetail(DetailContact, { label: "4" } as Options)
      ],
      [
        this.newDetail(DetailContact, { label: "1", positionY: "down" } as Options),
        this.newDetail(DetailContact, { positionY: "down", label: "3" } as Options)
      ],
      [this.newDetail(DetailHandle, { places: 2 } as Options)]
    ];
  }
}
