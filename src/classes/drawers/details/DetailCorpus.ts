import BaseDrawer from "../BaseDrawer";
import { Options } from "../Options";
import BaseDetail from "./BaseDetail";

export default class DetailCorpus extends BaseDetail {

  init(options: Options | undefined) {
    super.init(options);
    this.options.color = options && options.color ? options.color : "#FEFEFE";
  }



  svg(): string {
    const d1 = 45 / 2;
    const d2 = 25 / 2;
    const w = this.getWidth();
    const h = this.getHeight();
    const x = this.offsetX;
    const y = this.offsetY;
    //console.log("Owner:", this.owner)
    return `
        <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="1" :stroke-width="${this.options.strokeWidth
      }" fill="${this.options.color}" stroke="${this.options.strokeColor}"/>        
        <line x1="${x}" x2="${x + w}" y1="${y + h / 2 - d1}" y2="${y +
      h / 2 -
      d1}" stroke-width="${this.options.strokeWidth / 2}" stroke="${this.options.strokeColor
      }"/>  
        <line x1="${x}" x2="${x + w}" y1="${y + h / 2 + d1}" y2="${y +
      h / 2 +
      d1}" stroke-width="${this.options.strokeWidth / 2}" stroke="${this.options.strokeColor
      }"/>  
        <line x1="${x}" x2="${x + w}" y1="${y + h / 2 - d2}" y2="${y +
      h / 2 -
      d2}" stroke-width="${this.options.strokeWidth / 4}" stroke="${this.options.strokeColor
      }"/>  
        <line x1="${x}" x2="${x + w}" y1="${y + h / 2 + d2}" y2="${y +
      h / 2 +
      d2}" stroke-width="${this.options.strokeWidth / 4}" stroke="${this.options.strokeColor
      }"/>      
        `;
  }
}
