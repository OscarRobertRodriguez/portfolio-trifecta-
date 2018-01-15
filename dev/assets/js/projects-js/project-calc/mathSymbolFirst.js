import checkForMathUnicode from './checkForMathUnicode';


function mathSymbolFirst (a) {
	let input = document.querySelector('.screen_input');
  if (checkForMathUnicode(a)) {
  	return true;
  } 

  return false;
 
}

export default mathSymbolFirst; 