// USER INTERFACE LOGIC

// To get list of orders when button is clicked.
function getOrders(){
        toppingType = document.form.toppingType.selectedIndex;
        toppingType = document.form.toppingType.options[toppingType].value;
        crustType = document.form.crustType.selectedIndex;
        crustType = document.form.crustType.options[crustType].value;
        pizzaQuantity = document.getElementById("pizzaQuantity").value;
        document.getElementById("pizzaQuantity").innerHTML = pizzaQuantity;


        toppingType2 = document.form.toppingType2.selectedIndex;
        toppingType2 = document.form.toppingType2.options[toppingType2].value;
        crustType2 = document.form.crustType2.selectedIndex;
        crustType2 = document.form.crustType2.options[crustType2].value;
        pizzaQuantity2 = document.getElementById("pizzaQuantity2").value;
        document.getElementById("pizzaQuantity2").innerHTML = pizzaQuantity2;

        toppingType3 = document.form.toppingType3.selectedIndex;
        toppingType3 = document.form.toppingType3.options[toppingType3].value;
        crustType3 = document.form.crustType3.selectedIndex;
        crustType3 = document.form.crustType.options[crustType3].value;
        pizzaQuantity3 = document.getElementById("pizzaQuantity3").value;
        document.getElementById("pizzaQuantity3").innerHTML = pizzaQuantity;
        
          document.getElementById("display2").innerHTML="-" + pizzaQuantity + " " + "Small size pizza with " + toppingType + " " + "topping"+ " " + "and" +" "+ crustType +"<br>"+

          "-" +pizzaQuantity2 + " " + "Medium size pizza with " + toppingType2 + " " + "topping"+ " " + "and" +" "+ crustType2 +"<br>"+
          
          "-" +pizzaQuantity3 + " " + "Large size pizza with " + toppingType3 + " " + "topping"+ " " + "and" +" "+ crustType3; 

}


// CALCULATION OF TOTALS
$(document).ready(function() {
 
          // RATES FOR TAX AND DELIVERY FEE
          const taxRate = 0.06;
          const shippingRate = 150.00; 
          const fadeTime = 200;
          
          
          // USER INTERFACE LOGIC TO UPDATE TOTALS SECTION
          $('.product-quantity input').change( function() {
            updateQuantity(this);
          });
          
          $('.product-removal button').click( function() {
            removeItem(this);
          });
          
          
        //  BUSINESS LOGIC TO CALCULATE CART CONTENTS
          function recalculateCart()
          {
            var subtotal = 0;
            
          //  SUBTOTAL FOR ALL ORDERED ITEMS 
            $('.product').each(function () {
              subtotal += parseFloat($(this).children('.product-line-price').text());
            });
            
              // GRAND TOTAL INCLUDING TAX AND DELIVERY FEE
            var tax = subtotal * taxRate;
            var shipping = (subtotal > 0 ? shippingRate : 0);
            var total = subtotal + tax + shipping;
            
          //  UPDATE DISPLAYED TOTALS AS PER USER INPUTS IN REAL TIME
            $('.totals-value').fadeOut(fadeTime, function() {
              $('#cart-subtotal').html(subtotal.toFixed(2));
              $('#cart-tax').html(tax.toFixed(2));
              $('#cart-shipping').html(shipping.toFixed(2));
              $('#cart-total').html(total.toFixed(2));
              $('#cartTotal1').html(total.toFixed(2));
              $('#cartTotal2').html(total.toFixed(2));
            if(total == 0){
              $('.checkout').fadeOut(fadeTime);
            }else{
              $('.checkout').fadeIn(fadeTime);
            }
            $('.totals-value').fadeIn(fadeTime);
            $('.totalsValue2').fadeIn(fadeTime);
            $('.totalsValue2').fadeIn(fadeTime);
          });
        }
        
        
        // UPDATE QUANTITIES
        function updateQuantity(quantityInput)
        {
          // CALCULATE PRODUCT PRICE
          var productRow = $(quantityInput).parent().parent();
          var price = parseFloat(productRow.children('.product-price').text());
          var quantity = $(quantityInput).val();
          var linePrice = price * quantity;
          
          // TO UPDATE TOTALS AS USER INPUTS VALUES
          productRow.children('.product-line-price').each(function () {
            $(this).fadeOut(fadeTime, function() {
              $(this).text(linePrice.toFixed(2));
              recalculateCart();
              $(this).fadeIn(fadeTime);
            });
          });  
        }
        
        
        // TO REMOVE ITEM FROM CART AND RECALCULATE
        function removeItem(removeButton)
        {
          // REMOVE THE ROW CONTAINING PRODUCT DETAILS AND RECALCULATE CART CONTENTS
          var productRow = $(removeButton).parent().parent();
          productRow.slideUp(fadeTime, function() {
            productRow.remove();
            recalculateCart();
          });
        }
        
});


function checkoutAlert() {
  alert("Thank you for shopping at Pizza place.We have received your order!Delieveries will be made to you location.");
}