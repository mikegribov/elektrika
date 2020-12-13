import BaseBreaker from "@/classes/elements/BaseBreaker";
import { Options } from "@/classes/Options";

import {
  Empty,
  DetailCorpus2,
  DetailButton,
  DetailIndicator,
  DetailHandle,
  DetailContact
} from "@/classes/@Details";

export default class ElementRcd extends BaseBreaker {
  constructor(options?: Options) {
    super(options);
    this.options.label = "УЗО";
  }

  content() {
    return [
      [new DetailCorpus2()],
      [new DetailButton(), new DetailIndicator({ positionX: "right", positionY: "up" } as Options)],

      [
        new DetailContact({ label: "2" } as Options),
        new DetailContact({ label: "N" } as Options)
      ],
      [
        new DetailContact({ positionY: "down", label: "1" } as Options),
        new DetailContact({ positionY: "down", label: "N" } as Options)
      ],
      [new Empty(), new DetailHandle()]
    ];
  }
}
