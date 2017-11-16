import { Item } from './Item';


export class Sulfuras extends Item {
  constructor(sellIn, quality, conjured=false) {
    super('Sulfuras, Hand of Ragnaros', sellIn, quality, conjured);
  }

  update() {}
}