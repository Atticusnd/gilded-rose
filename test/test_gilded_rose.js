var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should return name, sellIn and quality from a simple product", function() {
    const gildedRose = new Shop([ new Item("foo", 1, 1) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(0);
    expect(items[0].quality).to.equal(0);
  });

  it("should return validation if quality degrades twice after sell date is passed", function() {
    const gildedRose = new Shop([ new Item("foo", 1, 4) ]);
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(1);
  });

  it("should return if 'Aged Brie' increases in quality the older it gets", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 4, 4) ]);
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(6);
  });

  it("should return if 'Aged Brie' increases in quality the older it gets", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 4, 4) ]);
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(6);
  });

  it("should return if 'Sulfuras' never has to be sold or decreases in Quality", function() {
    const gildedRose = new Shop([ new Item("Sulfuras", 4, 0) ]);
    gildedRose.updateQuality();
    const items = gildedRose.updateQuality();
    expect(items[0].quality).to.equal(80);
  });

  it("should return if 'Backstage passes' increases in quality the older it gets", function() {
    const BackstageUp = new Shop([ new Item("Backstage passes", 12, 4) ]);
    const BackstageLessThan10 = new Shop([ new Item("Backstage passes", 8, 4) ]);
    const BackstageLessThan5 = new Shop([ new Item("Backstage passes", 4, 4) ]);
    let itemsUp = BackstageUp.updateQuality();
    let itemsLessThan10 = BackstageLessThan10.updateQuality();
    let itemsLessThan5 = BackstageLessThan5.updateQuality();
    expect(itemsUp[0].quality).to.equal(5);
    expect(itemsLessThan10[0].quality).to.equal(6);
    expect(itemsLessThan5[0].quality).to.equal(7);
  });

  it("should return if 'Conjured' degrade in Quality twice", function() {
    const gildedRose = new Shop([ new Item("Conjured", 12, 4) ]);
    const items = gildedRose.updateQuality();
    const gtrThanZero = new Shop([ new Item("Conjured", 12, 1) ]);
    const itemsZero = gtrThanZero.updateQuality();
    expect(items[0].quality).to.equal(2);
    expect(itemsZero[0].quality).to.equal(0);
  });

});
