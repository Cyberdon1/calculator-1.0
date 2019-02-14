$(document).ready(function() {
  $("addnumber form").submit(function(event) {
    event.preventDefault();
    var add = function(number1add, number2add) {
      return number1add + number2add;
    };

    var number1add= parseInt(prompt("Enter a number:"));
    var number2add = parseInt(prompt("Enter another number:"));
    var resultadd = add(number1add, number2add);
    alert(resultadd);
  };

  $("subtractnumber form").submit(function(event) {
    event.preventDefault();

    var subtract = function(number1diff, number2diff) {
      return number1diff - number2diff;
    };

    var number1diff = parseInt(prompt("Enter a number:"));
    var number2diff = parseInt(prompt("Enter another number:"));
    var resultdiff = subtract(number1diff, number2diff;
    alert(resultdiff);
  };
  $("multiplynumber form").submit(function(event) {
    event.preventDefault();

    var multiply = function(number1prod, number2prod) {
      return number1prod * number2prod;
    };

    var number1prod = parseInt(prompt("Enter a number:"));
    var number2prod = parseInt(prompt("Enter another number:"));
    var resultprod = multiply(number1prod, number2prod);
    alert(resultprod);
  };

  $("dividenumber form").submit(function(event) {
    event.preventDefault();

    var divide = function(number1quot, number2quot) {
      return number1quot / number2quot;
    };

    var number1quot = parseInt(prompt("Enter a number:"));
    var number2quot = parseInt(prompt("Enter another number:"));
    var resultquot = divide(number1quot, number2quot);
    alert(resultquot);
  };




});
