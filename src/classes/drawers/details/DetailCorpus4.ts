import DetailCorpus from "./DetailCorpus";
import { Options } from "../Options";

export default class DetailCorpus4 extends DetailCorpus {
  constructor(options?: Options) {
    super(options);
  }

  getWidth() {
    return super.getWidth() * 4;
  }
}
