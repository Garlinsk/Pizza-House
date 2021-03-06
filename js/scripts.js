// / Business logic
$(document).ready(function() {
    $("#order-details").show();
    $(".main-delivery").show();
    $("#home-delivery").show();

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
    };
    Order.prototype.finalCost = function() {
        var cartTotalPrice = [];
        for (var arrayElement = 0; arrayElement < totalPriceArray.length; arrayElement++) {
            cartTotalPrice = totalPriceArray[arrayElement];
        }
        return cartTotalPrice;
    };
    $(".btn.check-out").click(function(event) {
        event.preventDefault();
    });
    $("form#custom-pizza").submit(function(event) {
        event.preventDefault();
        var pizzaSize = $("select#pizzaSize").val();
        console.log(pizzaSize);
        var pizzaCrust = $("select#pizzaCrust").val();
        var pizzaTopping = $("select#pizzaTopping").val();
        var pizzaDetails = (pizzaSize + " - " + pizzaCrust + " - " + pizzaTopping);
        var newPizzaOrder = new Order(pizzaSize, pizzaCrust, pizzaTopping);
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
        $(".main-delivery").show();
    });

    $("#submit1")(function() {
        var name = $("input#name").val();
        var phoneNumber = $("input#phoneNumber").val();
        var location = $("input#location").val();
        alert("Hello " +  name + ". Your order has been successfully received. It will be processed and delivered to " + location + " within one hour of placing.  Your delivery fee is ksh.250 .   Thank you for chosing our pizza-house.");
    });

});
