'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sulfuras = undefined;

var _Item = require('./Item');

class Sulfuras extends _Item.Item {
  constructor(sellIn, quality, conjured = false) {
    super('Sulfuras, Hand of Ragnaros', sellIn, quality, conjured);
  }

  update() {}
}
exports.Sulfuras = Sulfuras;