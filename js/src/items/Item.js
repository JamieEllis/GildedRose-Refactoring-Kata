export class Item {
  constructor(name, sellIn, quality, conjured=false){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.conjured = conjured;
  }

  isExpired() {
    return this.sellIn <= 0;
  }

  applyQualityTruncation() {
    if (this.quality < 0) {
      this.quality = 0;
    }
    else if (this.quality > 50) {
      this.quality = 50;
    }
  }

  update() {
    throw 'plz override me :)';
  }
}
