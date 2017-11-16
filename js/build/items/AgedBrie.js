'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AgedBrie = undefined;

var _Item = require('./Item');

class AgedBrie extends _Item.Item {
  constructor(sellIn, quality, conjured = false) {
    super('Aged Brie', sellIn, quality, conjured);
  }

  update() {
    let change = 1;
    if (this.isExpired()) {
      change *= 2;
    }
    if (this.conjured) {
      change *= 2;
    }
    this.quality += change;
    this.sellIn -= 1;
    this.applyQualityTruncation();
  }
}
exports.AgedBrie = AgedBrie;