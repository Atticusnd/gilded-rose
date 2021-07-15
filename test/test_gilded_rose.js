var {expect} = require('chai');
var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should return name, sellIn and quality from a simple product", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal("foo");
    expect(items[0].sellIn).to.equal(-1);
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
});
