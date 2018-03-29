function Pizza(pizzaSize, baseOption, cheeseOption, meatOptions, vegOptions) {
  this.pizzaSize = pizzaSize;
  this.baseOption = baseOption;
  this.cheeseOption = cheeseOption;
  this.meatOptions = meatOptions;
  this.vegOptions = vegOptions;
  this.total = 0;
}

const Prices = {
  "meat":1,
  "veg":0.5,
  "cheese":1,
  "extraCheese":2,
  "small":10,
  "medium":12,
  "large":15,
  "extraLarge":18
}



Pizza.prototype.showResults = function() {
  return this.pizzaSize + ', ' + this.baseOption + ', ' + this.cheeseOption + ', ' + this.meatOptions + ', ' + this.vegOptions;
};

Pizza.prototype.addOptions = function() {
  return this.total +=
    (this.meatOptions.length * Prices.meat) +
    (this.vegOptions.length * Prices.veg) +
    this.cheeseOption;
};

function cheeseMath() {
  if (document.getElementById('noneCheese').checked) {
    var noneCheese = document.getElementById('noneCheese').value;
    return noneCheese;
  } else if (document.getElementById('regCheese').checked) {
    var regCheese = document.getElementById('regCheese').value;
    return regCheese;
  } else if (document.getElementById('xCheese').checked) {
    var xCheese = document.getElementById('xCheese').value;
    return xCheese;
  };
};

$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();

    var pizzaSize = $('#pizzaSize :selected').val()
    var baseOption = $('input:radio[name=sauce]:checked').val();
    var cheeseOption = parseInt(cheeseMath());
    var meatOptions = [];
    var vegOptions = [];
    $('input:checkbox[name=topping-meat]:checked').each(function() {
      meatOptions.push($(this).val());
    });
    $('input:checkbox[name=topping-veg]:checked').each(function() {
      vegOptions.push($(this).val());
    });


    var newPizza = new Pizza(pizzaSize, baseOption, cheeseOption, meatOptions, vegOptions);
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
