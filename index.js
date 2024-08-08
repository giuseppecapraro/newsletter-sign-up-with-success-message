let formCheck = false;
let userEmail = "";

$(".email").on("input", function () {
    let val = $(this).val();
    if (val.trim() === "" || !validateEmail(val)) {
        formCheck = false;
        $(this).addClass("error");
        $(".error-message").css("display", "inline");
    } else {
        formCheck = true;
        $(this).removeClass("error");
        $(".error-message").hide();
    }
})

$(".card-button button").on("click", function () {
    if (formCheck != false) {
        $(".form").fadeOut();
        $(".card-success").fadeIn();
        userEmail = $(".email").val();
        $(".user-email").text(userEmail);
    }
})

$(".card-button button").on("click", function () {
    if (formCheck != false) {
        $(".form").fadeOut();
        $(".card-success").fadeIn();
        userEmail = $(".email").val();
        $(".user-email").text(userEmail);
    }
})

$(".card-success-button button").on("click", function () {
    $(".card-success").fadeOut();
    $(".form").fadeIn()
})

$(document).on("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        $(".card-button button").click();
    }
})

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}



