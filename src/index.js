function ones(number){
  let numberTostring;
  var ones = ['zero','one','two','three','four','five','six','seven','eight','nine', 'ten'];
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
  console.log(number);
  let numberTostring, strNumber;
    var  tens = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    let strNumberLenght, secondDigit; 
    strNumber = number.toString();
   // console.log(strNumber);
     if (strNumber[1]*1 === 0 ){
        numberTostring = tens[strNumber[0]*1-1];
      } else { numberTostring = tens[strNumber[0]*1-1]+' '+ones(strNumber[1]) ;
//} else { numberTostring = tens[strNumber[0]*1-1] + '\u00A0' + ones(strNumber[1]) ;
   }
    
  return numberTostring;
  }
  
  function hundreds(number){
    let numberTostring, strNumber, hundreds, tensOrTeens, zeroZero;
   	
    strNumber = number.toString();
		hundreds = strNumber[0]*1;
    tensOrTeens = strNumber.substring(1)*1;
    console.log(tensOrTeens);
    
    if (1<=tensOrTeens && tensOrTeens<=10){
    	tensOrTeens = ones(tensOrTeens);
    } else if  (11<=tensOrTeens && tensOrTeens<=19){
    tensOrTeens = teens(tensOrTeens);
    } else if ( 20<=tensOrTeens && tensOrTeens<= 99){
    tensOrTeens = tens(tensOrTeens);
		} if (tensOrTeens == 0){
    tensOrTeens = '';
    }
    
	//	console.log(tensOrTeens);
    numberTostring = ones(hundreds)+' '+'hundred'+' '+tensOrTeens;
    numberTostring = numberTostring.trim();
   // console.log(numberTostring);
   
   
   /*
    d = Math.floor(number/100);
    dd = (number/100-d).toFixed(2)*100;
    
   // console.log(d);
     console.log(dd);
    dd  === 0? zeroZero = '' : zeroZero=tens(dd);
    console.log(zeroZero);
    numberTostring = ones(d)+' '+'hundred'+' '+zeroZero;
		numberTostring = numberTostring.trim();
  */

   return numberTostring;
  }
  
module.exports = function toReadable (number) {
    let result;
    //strNumberLenght = strNumber.length;
    if (0 <= number && number < 10){
    result = ones(number);
    } else if (10 <= number && number < 20){
    result = teens(number);
    } else if (20 <= number && number < 100){
    result = tens(number);
    } else if   (100 <= number && number < 1000){
    result = hundreds(number);
    }
    
      return result; 
}//toReadable

	//var startTime = window.performance.now();

  
   let result;
   let number = 900;
   //result = toReadable(number);
  // console.log(window.performance.now() - startTime);
   console.log(result);


