import BaseBreaker from "@/classes/elements/BaseBreaker";
import { Options } from "@/classes/Options";
import {
  Empty,
  DetailCorpus4,
  DetailButton,
  DetailIndicator,
  DetailHandle,
  DetailContact
} from "@/classes/@Details";

export default class ElementRcd3 extends BaseBreaker {
  constructor(options?: Options) {
    super(options);
    this.options.label = "УЗО";
  }

  content() {
    return [
      [new DetailCorpus4()],
      [
        new Empty(),
        new Empty(),
        new DetailButton(),
        new DetailIndicator({ positionX: "right", positionY: "up" } as Options)
      ],
      [
        new DetailContact({ label: "2" } as Options),
        new DetailContact({ label: "4" } as Options),
        new DetailContact({ label: "6" } as Options),
        new DetailContact({ label: "N" } as Options)
      ],
      [
        new DetailContact({ positionY: "down", label: "1" } as Options),
        new DetailContact({ positionY: "down", label: "3" } as Options),
        new DetailContact({ positionY: "down", label: "5" } as Options),
        new DetailContact({ positionY: "down", label: "N" } as Options)
      ],
      [new Empty(), new Empty(), new Empty(), new DetailHandle()]
    ];
  }
}
