$(document).ready(function(){
  $("#new_user").validate({
    rules: {
      "user[name]": "required",
      "user[email]": {
        required: true,
        email: true
      },
      "user[mobile]": {
        required: true,
        minlength: 10,
        maxlength: 10
      },
      "user[password]": {
        required: true,
        minlength: 6
      },
      "user[password_confirmation]": {
        required: true,
        minlength: 6,
        equalTo: "#user_password"
      }
    },
    messages: {
      "user[name]": "NAME CAN NOT BE BLANK",
      "user[mobile]": {
        required: "MOBILE CAN NOT BE BLANK",
        minlength: "MOBILE CAN NOT BE LESS THAN 10 DIGITS",
        maxlength: "MOBILE CAN NOT BE GREATHER THAN 10 DIGITS"
      },
      "user[password]": {
        required: "PASSWORD CAN NOT BE BLANK",
        minlength: "YOUR PASSWORD MUST BE AT LEAST 6 CHARACETRS LONG"
      },
      "user[password_confirmation]": {
        required: "PASSWORD CONFIRM CAN NOT BE BLANK",
        minlength: "YOUR PASSWORD MUST BE AT LEAST 6 CHARACETRS LONG",
        equalTo: "PLEASE ENTER THE SAME PASSWORD AS ABOVE"
      },
      "user[email]": "PLEASE ENTER A VALID EMAIL ADDRESS"
    }, 
    highlight: function(element) {
      $(element).parent().addClass('has-error');
    },
    unhighlight: function(element) {
      $(element).parent().removeClass('has-error');
    }
  });

  $("#session_form").validate({
    rules: {
      "user[email]": {
        required: true,
        email: true
      },
      "user[password]": {
        required: true,
        minlength: 6
      }
    },
    messages: {
      "user[password]": {
        required: "PASSWORD CAN NOT BE BLANK",
        minlength: "YOUR PASSWORD MUST BE AT LEAST 6 CHARACETRS LONG"
      },
      "user[email]": "PLEASE ENTER A VALID EMAIL ADDRESS"
    }, 
    highlight: function(element) {
      $(element).parent().addClass('error');
    },
    unhighlight: function(element) {
      $(element).parent().removeClass('error');
    }
  });

});