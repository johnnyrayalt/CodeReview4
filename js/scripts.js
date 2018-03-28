$(document).ready(function() {
  // $('#pizzaSize option').attr('selected', 'selected');
  $('#form').submit(function(event) {
    event.preventDefault();

    var pizzaSize = $('#pizzaSize :selected').val()
    console.log(pizzaSize);
    var baseOption = $('input:radio[name=sauce]:checked').val();
    console.log(baseOption);
    var cheeseOption = $('input:radio[name=cheese]:checked').val();
    console.log(cheeseOption);
    var meatOptions = []
    $('input:checkbox[name=topping-meat]:checked').each(function() {
      meatOptions.push($(this).val());
    });
    console.log(meatOptions);
    var vegOptions = [];
    $('input:checkbox[name=topping-veg]:checked').each(function() {
        vegOptions.push($(this).val());
    });
    console.log(vegOptions);

  });
});
