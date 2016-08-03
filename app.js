$(document).ready(function(){
  var fruit = ["apples" , "oranges" , "bananas" , "pears"];
  var totalCash = 20;

  var c = new Customer(totalCash);

  // Store customer data.
  $('.container').data("info", c)

  $('.container').on('click', ".btn", function() {

  	console.log("click:")

  	var customerInfo = $('.container').data("info")

  	console.log("id: ", this.id)

  	switch(this.id) {
  		case 'a':
  		    customerInfo.apple += 1;
  		    break;
  		case 'o':
  		    customerInfo.oranges += 1;
  		    break;
  		case 'b':
  		    customerInfo.bananas += 1;
  		    break;
  		case 'p':
  		    customerInfo.pears += 1;
  		    break;
  	}

  	$('.container').data("info", c)

  });
});

function Customer(cash){
  this.cash = cash;
  this.apple = 0;
  this.oranges = 0;
  this.bananas = 0;
  this.pears = 0;
}

// Theresa's Functions ===================================================
var productPrices = {
  apple: 0,
  orange: 0,
  banana: 0,
  pear: 0
};

function priceShift(currentPrice){ // changes the price of a single item
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

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);

}
