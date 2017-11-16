"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => item.update());
    return this.items;
  }
}
exports.Shop = Shop;