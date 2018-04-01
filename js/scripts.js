function Pizza(pizzaSize, sauceOption, cheeseOption, meatOptions, vegOptions) {
  this.pizzaSize = pizzaSize;
  this.sauceOption = sauceOption;
  this.cheeseOption = cheeseOption;
  this.meatOptions = meatOptions;
  this.vegOptions = vegOptions;
  this.total = 0;
}


// change values here only
const Prices = {
  "small":10,
  "medium":12,
  "large":15,
  "extraLarge":18,
  "meat":1,
  "veg":0.5,
  "standard":1,
  "extra":0.5,
  "none":0
}

const Results = {
  "small":"small",
  "medium":"medium",
  "large":"large",
  "extraLarge":"extra large",
  "noneSauce":"no",
  "marinaraSauce":"marinara",
  "alfredoSauce":"alfredo",
  "pestoSauce":"pesto",
  "noneCheese":"no",
  "regCheese":"a normal amount of",
  "xCheese":"extra"
}

Pizza.prototype.pizzaSizeResult = function() {
  var pizzaSizeList = document.getElementById('pizzaSize').selectedIndex;
  var pizzaSizeOptions = document.getElementById('pizzaSize').options;

  var small = document.getElementById('small').selected;
  var medium = document.getElementById('medium').selected;
  var large = document.getElementById('large').selected;
  var extraLarge = document.getElementById('extraLarge').selected;

  if (pizzaSizeOptions[pizzaSizeList].index = small) {
    return Results.small;
  } else if (pizzaSizeOptions[pizzaSizeList].index = medium) {
    return Results.medium;
  } else if (pizzaSizeOptions[pizzaSizeList].index = large) {
    return Results.large;
  } else if (pizzaSizeOptions[pizzaSizeList].index = extraLarge) {
    return Results.extraLarge;
  }
}

Pizza.prototype.sauceOptionResult = function () {
  if (document.getElementById('noneSauce').checked) {
    return Results.noneSauce;
  } else if (document.getElementById('marinaraSauce').checked) {
    return Results.marinaraSauce;
  } else if (document.getElementById('alfredoSauce').checked) {
    return Results.alfredoSauce;
  } else if (document.getElementById('pestoSauce').checked) {
    return Results.pestoSauce;
  }
};

Pizza.prototype.cheeseOptionResult = function () {
  if (document.getElementById('noneCheese').checked) {
    return Results.noneCheese;
  } else if (document.getElementById('regCheese').checked) {
    return Results.regCheese;
  } else if (document.getElementById('xCheese').checked) {
    return Results.xCheese;
  }
};

Pizza.prototype.addOptions = function() {
  return this.total +
    this.pizzaSize +
    this.sauceOption +
    this.cheeseOption +
    (this.meatOptions.length * Prices.meat) +
    (this.vegOptions.length * Prices.veg);
};

Pizza.prototype.showResults = function() {

}

function sizeMath() {
  // if pizza size dropdown is seleceted to small
  if (document.getElementById('small').selected) {
    return Prices.small; //returns small pizza price from the const Price list above
  // if pizza size dropdown is seleceted to medium
  } else if (document.getElementById('medium').selected) {
    return Prices.medium; //returns medium pizza price from the const Price list above
  // if pizza size dropdown is seleceted to large
  } else if (document.getElementById('large').selected) {
    return Prices.large; //returns large pizza price from the const Price list above
    // if pizza size dropdown is seleceted to large
  } else if (document.getElementById('extraLarge').selected) {
    return Prices.extraLarge; //returns extraLarge pizza price from the const Price list above
  }
};

function sauceMath() {
  if (document.getElementById('noneSauce').checked) {
    return Prices.none;
  } else if (document.getElementById('marinaraSauce').checked) {
    return Prices.standard;
  } else if (document.getElementById('alfredoSauce').checked) {
    return Prices.standard + Prices.extra;
  } else if (document.getElementById('pestoSauce').checked) {
    return (2 * Prices.standard);
  }
};

function cheeseMath() {
  if (document.getElementById('noneCheese').checked) {
    return Prices.none;
  } else if (document.getElementById('regCheese').checked) {
    return Prices.standard;
  } else if (document.getElementById('xCheese').checked) {
    return (2 * Prices.standard);
  };
};

$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();

    // Creates variables to be passed into Pizza object
    var pizzaSize = parseInt(sizeMath());
    var sauceOption = parseInt(sauceMath());
    var cheeseOption = parseInt(cheeseMath());
    var meatOptions = [];
    var meatToppingsList = [];
    var vegOptions = [];
    var vegToppingsList = [];


    // Loops through the meat/veg checkboxes and adds each checked box into an array
    $('input:checkbox[name=topping-meat]:checked').each(function() {
      meatToppingsList.push($(this).val());
      var meatToppingsVal = (this.checked ? "on" : "off");
      if (this.checked = "on") {
        return meatOptions.push(meatToppingsVal);
      };
    });
    $('input:checkbox[name=topping-veg]:checked').each(function() {
      vegToppingsList.push($(this).val());
      var vegToppingsVal = (this.checked ? "on" : "off");
      if (this.checked = "on") {
        return vegOptions.push(vegToppingsVal);
      };
    });

    // Creates new Object named Pizza and is stored as newPizza
    var newPizza = new Pizza(pizzaSize, sauceOption, cheeseOption, meatOptions, vegOptions);

    var meatToppingsListString = meatToppingsList.join(", ");
    var vegToppingsListString = vegToppingsList.join(", ");

    $('p#pizzaText').show();
    $('#pizzaSizeResult').text(newPizza.pizzaSizeResult());
    $('#sauceOptionResult').text(newPizza.sauceOptionResult());
    $('#cheeseOptionResult').text(newPizza.cheeseOptionResult());
    $('#meatOptionsResult').text(meatToppingsListString);
    $('#vegOptionsResult').text(vegToppingsListString);
    $('#totalResult').text(newPizza.addOptions());

  });

  $('input.topping-meat[name=topping-meat-none]').on('change', function() {
      $('input.topping-meat').not(this).prop('checked', false);
  });

  // $('input.topping-meat').click(function(event)  {
  //   event.preventDefault();
  //     return $('input[name=topping-meat]').prop('checked', false);
  // });
  // $('input.topping-meat').click(function(event)  {
  //   event.preventDefault();
  //     return $('input#none-meat[name=topping-meat-none]').prop('checked', false);
  // });
});
