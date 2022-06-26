
$(document).ready(function() {
    $("#login-ac").click(function() {
        username = $("#username").val();
        password = $("#password").val();
        if (username == "admin" && password == "admin") {
            location.href = "data.html";
        }
        else{
            $(".incorrect").css("display","flex");
        }
    })
})