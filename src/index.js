module.exports = function toReadable (number) {
  let result;
  let strNumber;
  let strNumberLenght;
  var ones = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  var  teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen', 'nineteen'];
  var  tens = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  var hundreds = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
   
  strNumber = number.toString();
  strNumberLenght = strNumber.length;
if (0 <= number && number < 10){
result = ones[number];
} else if (10 <= number && number < 20){
result = teens[number-10];
}

  console.log(strNumber);
   console.log(strNumberLenght);
   return result;
  
 }
 /*
 14
 10
 22

 */
 let result;
 let number = 6;
 result = toReadable(number);
 
   console.log(result);