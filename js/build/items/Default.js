'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = undefined;

var _Item = require('./Item');

class Default extends _Item.Item {
  constructor(name, sellIn, quality, conjured = false) {
    super(name, sellIn, quality, conjured);
  }

  update() {
    let change = -1;
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
exports.Default = Default;