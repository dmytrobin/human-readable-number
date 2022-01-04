function ones(number){
  let numberTostring;
  var ones = ['zero','one','two','three','four','five','six','seven','eight','nine'];
  numberTostring = ones[number];
  return numberTostring;
  }
  
  function teens(number){
  let numberTostring;
  var  teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen', 'nineteen'];
  numberTostring = teens[number-10];
  return numberTostring;
  }
  
  function tens(number){
  let numberTostring, strNumber;
    var  tens = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
     
    strNumber = number.toString();
     if (strNumber[1]*1 === 0 ){
     numberTostring = tens[strNumber[0]*1-1];
   } else {  numberTostring = tens[strNumber[0]*1-1] + '\u00A0' + ones(strNumber[1]) ;
   }
    
  return numberTostring;
  }
  
  function hundreds(){
  
  }
  
  function toReadable (number) {
    let result;
    var hundreds = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
  //strNumberLenght = strNumber.length;
  if (0 <= number && number < 10){
  result = ones(number);
  } else if (10 <= number && number < 20){
  result = teens(number);
  } else if (20 <= number && number < 100){
   result = tens(number);
   } else if   (100 <= number && number < 1000){
   
   
   }
   
     return result; 
   }//toReadable
  
   let result;
   let number = 67;
   result = toReadable(number);
   
  console.log(result);