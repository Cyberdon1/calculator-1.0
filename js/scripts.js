$(document).ready(function() {

  // $("#addnumber form").submit(function(event) {
  //   var number1addInput = parseInt($("input#number1add").val());
  //   var number2addInput = parseInt($("input#number2add").val());
  //
  //
  //   var add = function(number1add, number2add) {
  //     //console.log("first number: " + number1add + " " + "Second Number: " + number2add);
  //     return number1add + number2add;
  //   };
  //
  //   var resultAdd = add(number1addInput, number2addInput);
  //
  //   $(".resultadd").text(resultAdd + " !");
  //
  //   $("additionresult").show();
  //
  //   event.preventDefault();
  // });

  $("subtractnumber form").submit(function(event) {
    console.log ("did load")
    var number1diffInput = parseInt($("input#number1diff").val());
    var number2diffInput = parseInt($("input#number2diff").val());

    var subtract = function(number1diff, number2diff) {
      console.log("first number: " + number1diff + " " + "second number: " + number2diff);
      return number1diff - number2diff;
    };


    var resultdiff = subtract(number1diff, number2diff);

    $(".subtractionresult").text(resultdiff + "!");

    $(".subtractionresult").show();


    event.preventDefault();
  });

  // $("multiplynumber form").submit(function(event) {
  //   event.preventDefault();
  //
  //   var multiply = function(number1prod, number2prod) {
  //     return number1prod * number2prod;
  //   };
  //
  //   var number1prod = parseInt(prompt("Enter a number:"));
  //   var number2prod = parseInt(prompt("Enter another number:"));
  //   var resultprod = multiply(number1prod, number2prod);
  //   alert(resultprod);
  // };
  //
  // $("dividenumber form").submit(function(event) {
  //   event.preventDefault();
  //
  //   var divide = function(number1quot, number2quot) {
  //     return number1quot / number2quot;
  //   };
  //
  //   var number1quot = parseInt(prompt("Enter a number:"));
  //   var number2quot = parseInt(prompt("Enter another number:"));
  //   var resultquot = divide(number1quot, number2quot);
  //   alert(resultquot);
  // };




});
