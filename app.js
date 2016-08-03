$(document).ready(function(){

  // var fruit = ["apples" , "oranges" , "bananas" , "grapes"];
  // var total cash = 20;



setInterval(priceShift, 15000);
});

function Customer(cash){
  this.cash = cash;
  this.apple = 0;
  this.oranges = 0;
  this.bananas = 0;
  this.grapes = 0;
}



// Theresa's Functions ===================================================

//initialPrice();

//======
var productPrices = {
  apple: 0,
  orange: 0,
  banana: 0,
  pear: 0
};




function initialPrice() {
    productPrices.apple = initialGen();
    productPrices.orange = initialGen();
    productPrices.banana = initialGen();
    productPrices.pear = initialGen();
      function initialGen() {
      var min = 50
      var max = 999
      startingPrice = randomNumber(min, max);
      return startingPrice
  };
};

function priceShift() {

function priceShuft(currentPrice){ // changes the price of a single item
  var min = currentPrice - 50; // minimum price
  var max = currentPrice - 50; // maximum price

  var newPrice = randomNumber(min, max);

  if (newPrice < 50) {
    newPrice = 50;
  }
  if (newPrice > 999) {
    newPrice = 999;
  }

  return newPrice;
}
productPrices.apple = priceShuft(productPrices.apple);
productPrices.orange = priceShuft(productPrices.orange);
productPrices.banana = priceShuft(productPrices.banana);
productPrices.pear = priceShuft(productPrices.pear);
}

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);

}
var timedPriceChange = setInterval (function() {
  priceShift();
  console.log(productPrices.apple);
}, 15000);



// CONSOLE LOG ===============================
initialPrice();
console.log(productPrices.apple);
