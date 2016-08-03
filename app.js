$(document).ready(function(){
  var fruit = ["apples" , "oranges" , "bananas" , "pears"];
  var totalCash = 20;

  var c = new Customer(totalCash);

  // Store customer data.
  $('.container').data("info", c)

  $('.container').on('click', ".btn", function() {

  	console.log("click:")

  	var customerInfo = $('.container').data("info")

  	switch(this.id) {
  		case 'a':
  		    customerInfo.apple += 1;
  		    $('#appleCount').text(customerInfo.apple)
  		    break;
  		case 'o':
  		    customerInfo.oranges += 1;
  		    $('#orangeCount').text(customerInfo.apple)
  		    break;
  		case 'b':
  		    customerInfo.bananas += 1;
  		    $('#bananaCount').text(customerInfo.apple)
  		    break;
  		case 'p':
  		    customerInfo.pears += 1;
  		    $('#pearCount').text(customerInfo.apple)
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
