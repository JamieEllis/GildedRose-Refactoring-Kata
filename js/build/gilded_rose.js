'use strict';

class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach(item => {
      if (item.name !== 'Aged Brie' && item.name !== 'Backstage passes to a TAFKAL80ETC concert' && item.name !== 'Sulfuras, Hand of Ragnaros') {
        item.quality -= 1;
      } else {
        item.quality += 1;
        if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.sellIn <= 10) {
            item.quality += 1;
          }
          if (item.sellIn <= 5) {
            item.quality += 1;
          }
        }
      }
      if (item.name !== 'Sulfuras, Hand of Ragnaros') {
        item.sellIn -= 1;
      }
      if (item.sellIn < 0) {
        if (item.name !== 'Aged Brie') {
          if (item.name !== 'Backstage passes to a TAFKAL80ETC concert' && item.name !== 'Sulfuras, Hand of Ragnaros') {
            if (item.name !== 'Sulfuras, Hand of Ragnaros') {
              item.quality -= 1;
            }
          } else {
            item.quality = 0;
          }
        } else {
          item.quality += 1;
        }
      }

      if (item.quality > 50) {
        item.quality = 50;
      }

      if (item.quality < 0) {
        item.quality = 0;
      }
    });

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
};