// / Business logic
$(document).ready(function() {
    // $("#order-details").hide();
    $(".delivery-section").hide();
    $("#home-delivery").hide();

    var totalPriceArray = [];
    function Order(pizzaSize, pizzaCrust, pizzaTopping, amount) {
        this.pizzaSize = pizzaSize;
        this.pizzaCrust = pizzaCrust;
        this.pizzaTopping = pizzaTopping;
        this.pizzaPrice = 0;
        this.amount = amount;
    }
    Order.prototype.pizzaCost = function() {
        if (this.pizzaSize === "large") {
            this.pizzaPrice += 2000;
        } else if (this.pizzaSize === "medium") {
            this.pizzaPrice += 1500;
        } else if (this.pizzaSize === "small") {
            this.pizzaPrice +=800;
        
        }
        if (this.pizzaCrust === "thin") {
            this.pizzaPrice += 700;
        } else if (this.pizzaCrust === "thick") {
            this.pizzaPrice += 600;
        } else if (this.pizzaCrust === "stuffed") {
            this.pizzaPrice += 400;
        } else if (this.pizzaCrust === "crispy") {
            this.pizzaPrice += 500;
        }else if (this.pizzaCrust === "cheese") {
                this.pizzaPrice += 450;
        }
        if (this.pizzaTopping === "bacon") {
            this.pizzaPrice += 120;
        } else if (this.pizzaTopping === "beaf") {
            this.pizzaPrice += 120;
        } else if (this.pizzaTopping === "sausages") {
            this.pizzaPrice += 100;
        } else if (this.pizzaTopping === "chicken") {
            this.pizzaPrice += 100;
        }
        if (this.pizzaTopping === "spinach") {
            this.pizzaPrice += 130;
        } else if (this.pizzaTopping === "tomatoes") {
            this.pizzaPrice += 100;
        } else if (this.pizzaTopping === "corriender") {
            this.pizzaPrice += 80;
        } else if (this.pizzaTopping === "onions") {
            this.pizzaPrice += 60;
        }
        if (this.pizzaTopping === "ricotta") {
            this.pizzaPrice += 130;
        } else if (this.pizzaTopping === "parmesam") {
            this.pizzaPrice += 100;
        } else if (this.pizzaTopping === "cheddar") {
            this.pizzaPrice += 80;
        } else if (this.pizzaTopping === "provolone") {
            this.pizzaPrice += 60;
        }
    };
    Order.prototype.finalCost = function() {
        var cartTotalPrice = [];
        for (var arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement++) {
            cartTotalPrice += totalPriceArray[arrayElement];
        }
        return cartTotalPrice;
    };
    $(".btn.check-out").click(function(event) {
        event.preventDefault();
    });
    $("form#custom-pizza").submit(function(event) {
        event.preventDefault();
        var pizzaFlavour = $("select#pizzaFlavour").val();
        var pizzaSize = $("select#pizzaSize").val();
        var pizzaCrust = $("select#pizzaCrust").val();
        var pizzaTopping = $("select#pizzaTopping").val();
        var pizzaDetails = (pizzaFlavour + " - " + pizzaSize + " - " + pizzaCrust + " - " + pizzaTopping);
        var newPizzaOrder = new Order(pizzaFlavour,pizzaSize, pizzaCrust, pizzaTopping);
        newPizzaOrder.pizzaCost();
        totalPriceArray.push(newPizzaOrder.pizzaPrice);
        $("#final-cost").text(newPizzaOrder.finalCost());
        $("#pizza-details").append("<ul><li>" + pizzaDetails + "</li></ul>");
    });
    $("#checkout-btn").click(function() {
        $("#checkout-btn").hide();
        $("#order-details").slideDown(1000);
        $("#home-delivery").show();
    });
    $("#delivery").click(function(){
        $("#delivery").hide();
        $("#pick-up").hide();
        $(".delivery-section").show();
    });
    $("#pick-up").click(function(){
        $("#delivery").hide();
        $("#pick-up").hide();
        $(".pick-up").slideDown(1000);
    });
    $(".delivery-section").submit(function() {
        var name = $("input#name").val();
        var phoneNumber = $("input#phoneNumber").val();
        var location = $("input#location").val();
        alert("Hello " +  name + ". Your order has been successfully received. It will be processed and delivered to " + location + " within one hour of placing.  Your delivery fee is ksh.250 .   Thank you for chosing our pizza inn.");
    });
});