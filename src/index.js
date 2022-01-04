module.exports = function toReadable (number) {
  let result, strNumber, strNumberLenght, secondDigit;

  var ones = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  var  teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen', 'nineteen'];
  var  tens = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  var hundreds = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
   

//strNumberLenght = strNumber.length;

if (0 <= number && number < 10){
result = ones[number];
} else if (10 <= number && number < 20){
result = teens[number-10];
} else if (20 <= number && number < 100){
strNumber = number.toString();
 if (strNumber[1]*1 === 0 ){
 	result = tens[strNumber[0]*1-1];
 } else {  result = tens[strNumber[0]*1-1] + '\u00A0' + ones[strNumber[1]*1] ;
 }
	
  
}
  
  
   return result;
  
 }
 /*

 22

 */
 let result;
 let number = 51;
 result = toReadable(number);
 
   console.log(result);