import DetailCorpus from "@/classes/details/DetailCorpus";
import { Options } from "@/classes/Options";

export default class DetailCorpus2 extends DetailCorpus {
  constructor(options?: Options) {
    super(options);
  }

  getWidth() {
    return super.getWidth() * 2;
  }
}
