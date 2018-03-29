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
  "veg":.5,
  "extraCheese":2,
  "small":10,
  "medium":12,
  "large":15,
  "extraLarge":18
}



Pizza.prototype.showResults = function() {
  return (this.pizzaSize + ', ' + this.baseOption + ', ' + this.cheeseOption + ', ' + this.meatOptions + ', ' + this.vegOptions).toString();
};

Pizza.prototype.addOptions = function() {
 this.total += (
   (this.meatOptions.length * Prices.meat) +
   (this.vegOptions.length * Prices.veg)
 );


};



$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();

    var pizzaSize = $('#pizzaSize :selected').val()
    var baseOption = $('input:radio[name=sauce]:checked').val();
    var cheeseOption = $('input:radio[name=cheese]:checked').val();
    var meatOptions = [];
    var vegOptions = [];
    $('input:checkbox[name=topping-meat]:checked').each(function() {
      meatOptions.push($(this).val());
    });
    $('input:checkbox[name=topping-veg]:checked').each(function() {
      vegOptions.push($(this).val());
    });

    var newPizza = new Pizza(pizzaSize, baseOption, cheeseOption, meatOptions, vegOptions);
    console.log(newPizza.addOptions());
    $('#showPizza').text(newPizza.showResults());
  });

 // TODO:  toggle checkbox functions
  // $('input.topping-meat').click(function()  {
  //   if($('input[name=topping-meat]').attr('checked', true)) {
  //     $('input#none-meat[name=topping-meat-none]').attr('checked', false);
  //   };
  // });
});
