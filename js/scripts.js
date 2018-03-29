<<<<<<< HEAD
function Pizza(pizzaSize, sauceOption, cheeseOption, meatOptions, vegOptions) {
  this.pizzaSize = pizzaSize;
  this.sauceOption = sauceOption;
=======
function Pizza(pizzaSize, baseOption, cheeseOption, meatOptions, vegOptions) {
  this.pizzaSize = pizzaSize;
  this.baseOption = baseOption;
>>>>>>> d93de4bb2c551a56c814f6440028223e018cbbc0
  this.cheeseOption = cheeseOption;
  this.meatOptions = meatOptions;
  this.vegOptions = vegOptions;
  this.total = 0;
}

<<<<<<< HEAD

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
  "extraLarge":"extra large"
}


Pizza.prototype.showResults = function() {
  return this.pizzaSize + ', ' + this.sauceOption + ', ' + this.cheeseOption + ', ' + this.meatOptions + ', ' + this.vegOptions;
};

Pizza.prototype.pizzaSizeResult = function() {
  var x = document.getElementById('pizzaSize').selectedIndex;
  if (x = 0) {
    console.log(x);
    return x;
  }
}

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
    var vegOptions = [];

    // Loops through the meat/veg checkboxes and adds each checked box into an array
    $('input:checkbox[name=topping-meat]:checked').each(function() {
      meatOptions.push($(this).val());
    });
    $('input:checkbox[name=topping-veg]:checked').each(function() {
      vegOptions.push($(this).val());
    });

    // Creates new Object names Pizza and is stored as newPizza
    var newPizza = new Pizza(pizzaSize, sauceOption, cheeseOption, meatOptions, vegOptions);

    console.log(newPizza.pizzaSize.pizzaSizeResult());
    $('#pizzaSizeResult').text(newPizza.pizzaSize.pizzaSizeResult());
    $('#sauceOptionResult').text(newPizza.sauceOption);
    $('#cheeseOptionResult').text(newPizza.cheeseOption);
    $('#meatOptionsResult').text(newPizza.meatOptions);
    $('#vegOptionsResult').text(newPizza.vegOptions);
    $('#totalResult').text(newPizza.addOptions());
  });

  // TODO:  toggle checkbox functions
  // $('input.topping-meat').click(function()  {
  //   if($('input[name=topping-meat]').attr('checked', true)) {
  //     $('input#none-meat[name=topping-meat-none]').attr('checked', false);
  //   };
  // });
=======
const Prices = {
  "meat":1,
  "veg":.5,
  "extraCheese":2,
  "small":10,
  "medium":12,
  "large":15,
  "extraLarge":18
}

function noMeat() {
  console.log("hi");
  var nope = $('input#none-meat').attr('checked', true);
  console.log(nope);
  if(nope = true) {
    $('input.topping-meat[name=topping-meat]').attr('checked', false);
  };
};

Pizza.prototype.showResults = function() {
  return (this.pizzaSize + ', ' + this.baseOption + ', ' + this.cheeseOption + ', ' + this.meatOptions + ', ' + this.vegOptions).toString();
};

Pizza.prototype.addOptions = function() {

  if (document.getElementById('input#none-meat').checked) {
    return this.total;
  } else {
    value = Prices.meat;
    return this.total += (this.meatOptions.length * value);
  };
};



$(document).ready(function() {
  // $('#pizzaSize option').attr('selected', 'selected');
  $('#form').submit(function(event) {
    event.preventDefault();

    var pizzaSize = $('#pizzaSize :selected').val()
    // console.log(pizzaSize);
    var baseOption = $('input:radio[name=sauce]:checked').val();
    // console.log(baseOption);
    var cheeseOption = $('input:radio[name=cheese]:checked').val();
    // console.log(cheeseOption);
    var meatOptions = [];
    $('input:checkbox[name=topping-meat]:checked').each(function() {
      meatOptions.push($(this).val());
    });
    // console.log(meatOptions);
    var vegOptions = [];
    $('input:checkbox[name=topping-veg]:checked').each(function() {
        vegOptions.push($(this).val());
    });
    // console.log(vegOptions);

    var newPizza = new Pizza(pizzaSize, baseOption, cheeseOption, meatOptions, vegOptions);
    console.log(newPizza.addOptions());
    $('#showPizza').text(newPizza.showResults());
  });
>>>>>>> d93de4bb2c551a56c814f6440028223e018cbbc0
});
