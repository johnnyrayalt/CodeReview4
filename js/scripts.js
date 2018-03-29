function Pizza(pizzaSize, sauceOption, cheeseOption, meatOptions, vegOptions) {
  this.pizzaSize = pizzaSize;
  this.sauceOption = sauceOption;
  this.cheeseOption = cheeseOption;
  this.meatOptions = meatOptions;
  this.vegOptions = vegOptions;
  this.total = 0;
}

const Prices = {
  "meat":1,
  "veg":0.5,
  "extraCheese":2,
  "small":10,
  "medium":12,
  "large":15,
  "extraLarge":18,
  "standard":1,
  "extra":0.5,
  "none":0
}



Pizza.prototype.showResults = function() {
  return this.pizzaSize + ', ' + this.sauceOption + ', ' + this.cheeseOption + ', ' + this.meatOptions + ', ' + this.vegOptions;
};

Pizza.prototype.addOptions = function() {
  return this.total +=
    (this.meatOptions.length * Prices.meat) +
    (this.vegOptions.length * Prices.veg) +
    this.cheeseOption +
    this.sauceOption;
};

function cheeseMath() {
  if (document.getElementById('noneCheese').checked) {
    return Prices.none;
  } else if (document.getElementById('regCheese').checked) {
    return Prices.standard;
  } else if (document.getElementById('xCheese').checked) {
    return Prices.extraCheese;
  };
};

function sauceMath() {
  if (document.getElementById('noneSauce').checked) {
    return Prices.none;
  } else if (document.getElementById('marinaraSauce').checked) {
    return Prices.standard;
  } else if (document.getElementById('alfredoSauce').checked) {
    return Prices.standard + Prices.extra;
  } else if (document.getElementById('pestoSauced').checked) {
    return (2 * Prices.standard);
  }
};

$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();

    var pizzaSize = $('#pizzaSize :selected').val()
    var sauceOption = parseInt(sauceMath());
    var cheeseOption = parseInt(cheeseMath());
    var meatOptions = [];
    var vegOptions = [];
    $('input:checkbox[name=topping-meat]:checked').each(function() {
      meatOptions.push($(this).val());
    });
    $('input:checkbox[name=topping-veg]:checked').each(function() {
      vegOptions.push($(this).val());
    });


    var newPizza = new Pizza(pizzaSize, sauceOption, cheeseOption, meatOptions, vegOptions);
    //console.log(newPizza.cheeseOption);


    console.log(newPizza.addOptions());
    // $('#showPizza').text(newPizza.addOptions());
  });

  // TODO:  toggle checkbox functions
  // $('input.topping-meat').click(function()  {
  //   if($('input[name=topping-meat]').attr('checked', true)) {
  //     $('input#none-meat[name=topping-meat-none]').attr('checked', false);
  //   };
  // });
});
