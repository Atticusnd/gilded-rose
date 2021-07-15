class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

function updateConjuredItems(item) {
    //Decrease quality while being greater than 0
    item.quality -2 >= 0 ? item.quality -= 2 : item.quality = 0;  
    item.sellIn -= 1;
    return item;
  }

class Shop {
  constructor(items=[]){
    this.items = items;
  }


  updateQuality() {
    const itemsValues = {
      Sulfuras: { name: 'Sulfuras', sellIn: 0, quality: 80 },
    }

    for (var i = 0; i < this.items.length; i++) {
      if(this.items[i].name === 'Conjured'){
        this.items[i] = updateConjuredItems(this.items[i]);
      }else if(itemsValues[this.items[i].name]){
        this.items[i] = itemsValues[this.items[i].name];
      }else{
        if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes') {
            if (this.items[i].quality > 0) {
                this.items[i].quality = this.items[i].quality - 1;
            }
          } else {
            if (this.items[i].quality < 50) {
              this.items[i].quality = this.items[i].quality + 1;
              if (this.items[i].name == 'Backstage passes') {
                if (this.items[i].sellIn < 11) {
                  if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1;
                  }
                }
                if (this.items[i].sellIn < 6) {
                  if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1;
                  }
                }
              }
            }
          }
          if (this.items[i].name != 'Sulfuras') {
            this.items[i].sellIn = this.items[i].sellIn - 1;
          }
          if (this.items[i].sellIn < 0) {
            if (this.items[i].name != 'Aged Brie') {
              if (this.items[i].name != 'Backstage passes') {
                if (this.items[i].quality > 0) {
                    this.items[i].quality = this.items[i].quality - 1;
                }
              } else {
                this.items[i].quality = this.items[i].quality - this.items[i].quality;
              }
            } else {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
