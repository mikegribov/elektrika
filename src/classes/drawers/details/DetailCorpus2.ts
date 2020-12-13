import DetailCorpus from "./DetailCorpus";
import { Options } from "../Options";

export default class DetailCorpus2 extends DetailCorpus {
  constructor(options?: Options) {
    super(options);
  }

  getWidth() {
    return super.getWidth() * 2;
  }
}
