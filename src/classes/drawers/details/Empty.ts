import Base from "../BaseDrawer";

export default class Empty extends Base {
  constructor() {
    super();
  }

  svg(): string { return '' }
}
