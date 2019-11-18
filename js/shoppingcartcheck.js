
// var x = document.getElementById("checkbutton");
// x.addEventListener("click", validateForm);
//
// function test(e) {
//   alert("Test");
//   e.preventDefault();
// }

function validateForm(e) {
  //full name must be filled out
  var fname = document.forms["orderform"]["fname"].value;
  if (fname == "") {
    alert("Name must be filled out");
    e.preventDefault();
    return false;
  }

  //Email Address must be valid
  var email = document.forms["orderform"]["email"].value;
  if (email == "") {
    alert("Email must be filled out");
    e.preventDefault();
    return false;
  }

  //Street must be filled out
  var street = document.forms["orderform"]["street"].value;
  if (street == "") {
    alert("Street must be filled out");
    e.preventDefault();
    return false;
  }

  //Country Code must be filled out
  var countrycode = document.forms["orderform"]["countrycode"].value;
  if (countrycode == "") {
    alert("Country Code must be filled out");
    e.preventDefault();
    return false;
  }

  //Country must be filled out (and valid?)
  var country = document.forms["orderform"]["country"].value;
  if (country == "") {
    alert("Country must be filled out");
    e.preventDefault();
    return false;
  }

  //if card payment checked:
  if (document.getElementById("cashradio").checked = true) {

    //Name on Card filled out
    var cardname = document.forms["orderform"]["cardname"].value;
    if (cardname == "") {
      alert("Name on Card must be filled out");
      e.preventDefault();
      return false;
    }

    //Card number must have 16 digits
    var cardnumber = document.forms["orderform"]["cardnumber"].value;
    if (cardnumber.length != 16){
      alert("Card Number must have 16 digits");
      e.preventDefault();
      return false;
    }

    //CVV must have 3 digits
    var cvv = document.forms["orderform"]["cvv"].value;
    if (cvv.length != 3) {
      alert("CVV must have 3 digits in order to be valid");
      e.preventDefault();
      return false;
    }
  }
  else{
    return true;
  }


}
