import { Item } from './Item';


export class BackstagePass extends Item {
  constructor(sellIn, quality, conjured=false) {
    super('Backstage passes to a TAFKAL80ETC concert', sellIn, quality, conjured);
  }

  update() {
    if (this.isExpired()) {
      this.quality = 0;
    }
    else {
      let change = 1;
      if (this.sellIn <= 10) {
        change += 1;
      }
      if (this.sellIn <= 5) {
        change += 1;
      }
      if (this.conjured) {
        change *= 2;
      }
      this.quality += change;
    }
    this.sellIn -= 1;
    this.applyQualityTruncation();
  }
}