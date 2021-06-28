$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault();
        let name = $("#name").val();
        let email = $("#email").val();
        let location = $("#location").val();
        let phoneNumber = $("#number").val();
        

        if (name == "") {
            alert("please enter your name correctly");
        }else if (email == "") {
            alert("please enter your email correctly");
        }else if (message == "") {
            alert("please enter a message");
        }else {
            alert("Hi " + name + "Thank you for shopping with us.A confirmation message will be sent to confirm your order")
        }
    });
});