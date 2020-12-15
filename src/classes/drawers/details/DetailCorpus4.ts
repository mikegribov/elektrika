import DetailCorpus from "./DetailCorpus";
import BaseDrawer from "../BaseDrawer";
import { Options } from "../Options";

export default class DetailCorpus4 extends DetailCorpus {

  getWidth() {
    return super.getWidth() * 4;
  }
}
