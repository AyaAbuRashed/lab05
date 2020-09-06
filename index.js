
var age=prompt("enter your age");
var Advice;


function A(age)
{
  var name =prompt("Enter your name");
  var fname= prompt("Enter your family name");
 
  
  console.log("Welcome  "+name + fname+"  look to your website we have an advice for you");
  if (age >=5 && age < 18) {
      Advice = '“What you do when you’re young, it will haunt you when you get old. If you’re young, take care of your body, live right, go to the doctor and keep yourself in good shape. Don’t abuse your body in any way, shape, or form.”';
    } else if (age >= 18 && age <45) {
      Advice = 'Experience life and travel. Have more self confidence to go out and and experience new things!';
    } else if (age >= 45) {
      Advice = 'I am much clearer now. I say that as an older person — not just as an adult, but as an older person — things are much clearer. I was just telling my daughter, ‘I think I’m happier now than I’ve ever been in my life.';
    } else{
     Advice =("Enter a correct age!");
    }
  document.write('<h3>This is our advice for you ^-^' + Advice + '</h3>');

    return Advice;}
  
    var showOrder = function () {
      var userInput = prompt('Choose new or used car');
     
      //the userInput should equal to house or hotel only
      while (userInput !== "new" && userInput !== 'used' ) {
        userInput = prompt('Choose new or used car ');
        
      }
      //input
      var userOrder = "";
      var numberOfImage = prompt("how many images do you want to print");
      //numberOfImage = 3
      for (var count = 0; count < numberOfImage; count++) {
        if (userInput == "new") {
           document.write("<img src='https://saudishift.com/wp-content/uploads/2019/10/Mercedes_CClass_2020_silver_1.jpg' alt=''>");
          userOrder = userOrder + "<img src='https://saudishift.com/wp-content/uploads/2019/10/Mercedes_CClass_2020_silver_1.jpg' alt=''>";
          console.log(userOrder);
        }
        else if (userInput == "used") {
           document.write("<img src='https://i2.wp.com/clark.com/wp-content/uploads/2019/05/used-car-image.png?fit=1200%2C630&ssl=1' alt=''>");
          userOrder = userOrder + "<img src='https://i2.wp.com/clark.com/wp-content/uploads/2019/05/used-car-image.png?fit=1200%2C630&ssl=1' alt=''>";
          console.log(userOrder);
        }
      }
      //output
      return userOrder;
    }
showOrder();
