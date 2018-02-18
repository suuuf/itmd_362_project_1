$("html").removeClass("nojs").addClass("js");

$("#contact-form").on("submit",
  function (e) {
    var emailRegex = /^([\w-]+@([\w-]+)+[\w-]{2,4})?$/;
    var email = $("#email").val();
    e.preventDefault();
    if (email.length > 0) {
      if (!emailRegex.test(email)) {
        console.log("Invalid Email");
        if (!$("#email-section").find("li").hasClass("error")){
          $("#email-section").append("<li class='error'>Invalid email address.</li>");
          $("#email").css("border-color", "red");
        }
      } else {
        console.log("Valid Email; Submitting Form");
        $("#email-section").find(".error").remove();
        $("#email").css("border-color", "grey");
        $("#contact-form").remove();
        $("#sign-up-content").append("<h2 class='success'>Signup successful!</h2>");
      }
    } else {
      console.log("Empty Email");
      if (!$("#email-section").find("li").hasClass("error")){
        $("#email-section").append("<li class='error'>Invalid email address.</li>");
        $("#email").css("border-color", "red");
      }
    }
  }
);
