
function getOrders(){
  toppingType = document.form.toppingType.selectedIndex;
  toppingType = document.form.toppingType.options[toppingType].value;
  crustType = document.form.crustType.selectedIndex;
  crustType = document.form.crustType.options[crustType].value;
  var pizzaQuantity = document.getElementById("pizzaQuantity").value;
  document.getElementById("pizzaQuantity").innerHTML = pizzaQuantity;

  toppingType2 = document.form.toppingType2.selectedIndex;
  toppingType2 = document.form.toppingType2.options[toppingType2].value;
  crustType2 = document.form.crustType2.selectedIndex;
  crustType2 = document.form.crustType2.options[crustType2].value;
  var pizzaQuantity2 = document.getElementById("pizzaQuantity2").value;
  document.getElementById("pizzaQuantity2").innerHTML = pizzaQuantity2;

  toppingType3 = document.form.toppingType3.selectedIndex;
  toppingType3 = document.form.toppingType3.options[toppingType3].value;
  crustType3 = document.form.crustType3.selectedIndex;
  crustType3 = document.form.crustType.options[crustType3].value;
  var pizzaQuantity3 = document.getElementById("pizzaQuantity3").value;
  document.getElementById("pizzaQuantity3").innerHTML = pizzaQuantity;
  
    document.getElementById("display2").innerHTML="-" + pizzaQuantity + " " + "small size pizza with " + toppingType + " " + "topping"+ " " + "and" +" "+ crustType +"<br>"+

    "-" +pizzaQuantity2 + " " + "medium size pizza with " + toppingType2 + " " + "topping"+ " " + "and" +" "+ crustType2 +"<br>"+
     
    "-" +pizzaQuantity3 + " " + "medium size pizza with " + toppingType3 + " " + "topping"+ " " + "and" +" "+ crustType3; 

}



$(document).ready(function() {
 
  /* Set rates + misc */
  var taxRate = 0.05;
  var shippingRate = 15.00; 
  var fadeTime = 300;
   
   
  /* Assign actions */
  $('.product-quantity input').change( function() {
    updateQuantity(this);
  });
   
  $('.product-removal button').click( function() {
    removeItem(this);
  });
   
   
  /* Recalculate cart */
  function recalculateCart()
  {
    var subtotal = 0;
     
    /* Sum up row totals */
    $('.product').each(function () {
      subtotal += parseFloat($(this).children('.product-line-price').text());
    });
     
    /* Calculate totals */
    var tax = subtotal * taxRate;
    var shipping = (subtotal > 0 ? shippingRate : 0);
    var total = subtotal + tax + shipping;
     
    /* Update totals display */
    $('.totals-value').fadeOut(fadeTime, function() {
      $('#cart-subtotal').html(subtotal.toFixed(2));
      $('#cart-tax').html(tax.toFixed(2));
      $('#cart-shipping').html(shipping.toFixed(2));
      $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}
 
 
/* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity;
   
  /* Update line price display and recalc cart totals */
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });  
}
 
 
/* Remove item from cart */
function removeItem(removeButton)
{
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
  });
}
 
});