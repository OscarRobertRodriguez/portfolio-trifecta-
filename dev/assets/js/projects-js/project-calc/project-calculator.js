
//select dom nodes
let img1 = document.querySelector('.project-calculator_mock-img'); 


// init images
img1.src = require('images/calculator-mock.png');








 // javascript function imports
 import './history-expand';
 import animateBottomEval from './animateBottomEval';
 import checkForMathUnicode from './checkForMathUnicode';
 import checkForMathSymbols from './checkForMathSymbols';
 import reduceFont from './reduceFont';
 import deleteNum from './deleteNum';
 import evaluate from './evaluate';
 import evalBelow from './evalBelow';
 import mathSymbolFirst from './mathSymbolFirst'; 
 import addToHistory from './addToHistory';
 import addClearBtn from './addClearBtn';
 import clear from './clear';
 import addDeleteBtn from './addDeleteBtn';


 let input = document.querySelector('.screen_input');
 let fontSize = input.style.fontSize;
 let buttons = Array.from(document.getElementsByClassName('btn'));
 let delBtn = document.getElementById('delBtn');
 input.addEventListener('onload', reduceFont());


 //	loop through all btns
 for (var i = 0; i < buttons.length; i++) {
     // add eventlistener to each btn on click
     buttons[i].addEventListener('click', function InputValue(e) {
         // list variables
         let target = e.target,
             value = target.getAttribute('value'),
             input = document.querySelector('.screen_input'),
             inputBottom = document.querySelector('.screen_result'),
             last = input.value.slice(-1),
             first = input.value.slice(0,1),
             total = input.value + value,
             inputLength =  total.length;
         let delBtn = document.getElementById('delBtn').getAttribute('value');
         // use focus and select so cursor select input on clicks    
         input.focus();
         input.select();
             
          console.log(`i'm the target value attribute ${value}`);
          console.log(`i'm the last variable ${last}`); 
          console.log('this is first ' + first); 
          console.log(`i'm the length ${inputLength}`); 
          console.log(`i'm the total ${total}`); 

        //   if(inputLength === 0 && value === '−' ) {
        //     input.value = '−';
        // }



      

         // statement that checks if the last character is a math symbol so that it
         // is not added twice after another symbol
         
         if (checkForMathUnicode(last) && checkForMathUnicode(value) ) {
             input.value = input.value.slice(0, input.value.length - 1);
         }
         
       
         // if statment that fire code block if equal to del btn 
         if (value === 'DEL') {
             deleteNum();
             reduceFont();
             evalBelow();
             console.log('deleted');
         }
          
         if (value === 'CLR') {
 			clear();
         }

         if (delBtn === 'CLR' && value != '=') {
         	addDeleteBtn();
         }

         // statment that fires code block if its equal to '='
           if (value === '=' && inputBottom.value.length > 0 && delBtn != 'CLR') { 
             animateBottomEval();
             addClearBtn(); 
         } 




         // fires if its not equall to del btn or equal btn 
           if (value !== 'DEL' && value !== '='  && value !== 'CLR' ) {
             input.value += value;
             input.addEventListener('input', reduceFont());
             input.addEventListener('input', evalBelow());
         }

           if (inputLength === 1 && checkForMathUnicode(value)) {
            input.value = '';
            if(value === '−') {
                input.value = '−';
            }
        }

       

     });

 }


// timer function for del btn to clear screen on mouse release after half a second
 
var mousedown;
delBtn.addEventListener('mousedown', function() {
		mousedown = Date.now(); 
}); 

delBtn.addEventListener('mouseup', function() {
	var elapsed = Date.now() - mousedown; 
	mousedown = undefined; 
	if (elapsed >= 500) {
	    let input = document.querySelector('.screen_input');
        input.value = ''; 
	}
});