import replaceUnicode from './replaceUnicode'; 



 function evaluate() {
     let input = document.querySelector('.screen_input');
     let content = input.value;
     if (content.length > 20) {
         input.value = eval(replaceUnicode(content)).toExponential();
     } else {
         input.value = eval(replaceUnicode(content));
     }
 }



export default evaluate; 