$("form").submit(function(event) {
    event.preventDefault();
    let name = $("#name").val();
    let email = $("#email").val();
    let message = $("#message").val();
    let phoneNumber = $("#number").val();
    let location = $("#message").val();

    if (name == "") {
        alert("please enter your name correctly");
    }else if (email == "") {
        alert("please enter your email correctly");
    }else if (message == "") {
        alert("please enter a message");
    }else {
        alert("Hi " + name + "we have received your message.Thank you for reaching out to us.")
    }}else if (location == "") {
        alert("please enter a location");
    }else if (phoneNumber == "") {
        alert("please enter a number");
});