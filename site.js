$("#contact-form").on("submit",
  function (e) {
    e.preventDefault();
    var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $("#email").val();
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
