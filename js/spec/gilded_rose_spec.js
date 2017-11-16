import { Shop } from '../build/gilded_rose';
import { Item } from '../build/items/Item';
import { Default } from '../build/items/Default';
import { AgedBrie } from '../build/items/AgedBrie';
import { Sulfuras } from "../build/items/Sulfuras";
import { BackstagePass } from "../build/items/BackstagePass";
import 'chai/register-should';


function qualityNeverNegative(itemName) {
  // Only applicable to items which decrease in quality.
  const shop = new Shop(
    [ new Item(itemName, 5, 0) ]
  );
  const items = shop.updateQuality();
  items[0].quality.should.be.least(0);
}

function qualityNeverGoesAboveFifty(itemName) {
  // Only applicable to items which increase in quality.
  const shop = new Shop(
    [ new Item(itemName, 5, 50) ]
  );
  const items = shop.updateQuality();
  items[0].quality.should.be.most(50);
}


describe('Gilded Rose', () => {

  describe('items', () => {

    it('sell-in value decreases by one each day', () => {
      const shop = new Shop(
        [ new Default('Default item', 5, 0) ]
      );
      const items = shop.updateQuality();
      items[0].sellIn.should.equal(4);
    });

    describe('default', () => {

      it('quality never goes negative', () => {
        const shop = new Shop(
          [ new Default('Default Item', 5, 0) ]
        );
        const items = shop.updateQuality();
        items[0].quality.should.equal(0);
      });

      it('unexpired: quality decreases by one each day', () => {
        const shop = new Shop(
          [ new Default('Default Item', 5, 5) ]
        );
        const items = shop.updateQuality();
        items[0].quality.should.equal(4);
      });

      it('expired: quality decreases by two each day', () => {
        const shop = new Shop(
          [ new Default('Default Item', -5, 5) ]
        );
        const items = shop.updateQuality();
        items[0].quality.should.equal(3);
      });

      it('unexpired conjured: quality decreases by two each day', () => {
        const shop = new Shop(
          [ new Default('Conjured Default Item', 5, 5, true) ]
        );
        const items = shop.updateQuality();
        items[0].quality.should.equal(3);
      });

      it('expired conjured: quality decreases by four each day', () => {
        const shop = new Shop(
          [ new Default('Conjured Default Item', -5, 5, true) ]
        );
        const items = shop.updateQuality();
        items[0].quality.should.equal(1);
      });

    });

    describe('aged brie', () => {

      it('quality never goes above 50', () => {
        const shop = new Shop(
          [ new AgedBrie(5, 50) ]
        );
        const items = shop.updateQuality();
        items[0].quality.should.equal(50);
      });

      it('unexpired: quality increases by one each day', () => {
        const shop = new Shop(
          [ new AgedBrie(5, 5) ]
        );
        const items = shop.updateQuality();
        items[0].quality.should.equal(6);
      });

      it('expired: quality increases by two each day', () => {
        const shop = new Shop(
          [ new AgedBrie(-5, 5) ]
        );
        const items = shop.updateQuality();
        items[0].quality.should.equal(7);
      });

      it('unexpired conjured: quality increases by two each day', () => {
        const shop = new Shop(
          [ new AgedBrie(5, 5, true) ]
        );
        const items = shop.updateQuality();
        items[0].quality.should.equal(7);
      });

      it('expired conjured: quality increases by four each day', () => {
        const shop = new Shop(
          [ new AgedBrie(-5, 5, true) ]
        );
        const items = shop.updateQuality();
        items[0].quality.should.equal(9);
      });
    });

    describe('sulfuras', () => {

      it('quality never goes above 50', () => {
        const shop = new Shop(
          [ new Sulfuras(5, 50) ]
        );
        const items = shop.updateQuality();
        items[0].quality.should.equal(50);
      });

      it('quality never decreases', () => {
        const shop = new Shop(
          [ new Sulfuras(5, 5) ]
        );
        const items = shop.updateQuality();
        items[0].quality.should.be.least(5);
      });

      it('sell-in never decreases', () => {
        const shop = new Shop(
          [ new Sulfuras(5, 0) ]
        );
        const items = shop.updateQuality();
        items[0].sellIn.should.be.least(5);
      });

    });

    describe('backstage passes', () => {

      it('quality never goes above 50', () => {
        const shop = new Shop(
          [ new BackstagePass(50, 50) ]
        );
        const items = shop.updateQuality();
        items[0].quality.should.equal(50);
      });


      it('quality increases by one when more than 10 days until concert', () => {
        const shop = new Shop(
          [ new BackstagePass(50, 5) ]
        );
        const items = shop.updateQuality();
        items[0].quality.should.equal(6);
      });

      it('quality increases by two when more than 5 days but less than or equal to 10 days until concert', () => {
        const shop = new Shop(
          [ new BackstagePass(7, 5) ]
        );
        const items = shop.updateQuality();
        items[0].quality.should.equal(7);
      });

      it('quality increases by three when less than or equal to 5 days until concert', () => {
        const shop = new Shop(
          [ new BackstagePass(3, 5) ]
        );
        const items = shop.updateQuality();
        items[0].quality.should.equal(8);
      });

      it('quality drops to zero after concert', () => {
        const shop = new Shop(
          [ new BackstagePass(0, 50) ]
        );
        const items = shop.updateQuality();
        items[0].quality.should.equal(0);
      });

      it('conjured quality increases by two when more than 10 days until concert', () => {
        const shop = new Shop(
          [ new BackstagePass(50, 5, true) ]
        );
        const items = shop.updateQuality();
        items[0].quality.should.equal(7);
      });

      it('conjured quality increases by four when more than 5 days but less than or equal to 10 days until concert', () => {
        const shop = new Shop(
          [ new BackstagePass(7, 5, true) ]
        );
        const items = shop.updateQuality();
        items[0].quality.should.equal(9);
      });

      it('conjured quality increases by six when less than or equal to 5 days until concert', () => {
        const shop = new Shop(
          [ new BackstagePass(3, 5, true) ]
        );
        const items = shop.updateQuality();
        items[0].quality.should.equal(11);
    });
    });

  });

});
