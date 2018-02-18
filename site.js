$('html').removeClass('nojs').addClass('js');

$("#contact-form").on("submit",
  function (e) {
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $("#email").val();
    e.preventDefault();
    if (email.length > 0) {
      if (!emailRegex.test(email)) {
        console.log("Invalid Email");
      } else {
        console.log("Valid Email; Submitting Form");
      }
    } else {
      console.log("Empty Email");
    }
  }
);
