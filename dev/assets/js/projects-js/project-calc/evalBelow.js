import replaceUnicode from './replaceUnicode';

import checkForMathSymbols from './checkForMathSymbols';


function evalBelow() {
    let input = document.querySelector('.screen_input');
    let bottomInput = document.querySelector('.screen_result');
    let bottomValue = bottomInput.value;
    let content = replaceUnicode(input.value);

    if (checkForMathSymbols(content) || content.length == 0) {
        bottomInput.value = '';
    }

    try {
        eval(replaceUnicode(input.value))
    } catch (e) {
        if (e instanceof SyntaxError) {
            bottomInput.value = '';
            return;
        } else {
            bottomInput.value = '';
            return;
        }
    }

    if (content.length > 20 && checkForMathSymbols(content)) {
        let value = eval(replaceUnicode(input.value)).toExponential();
        bottomInput.value = value;
    } else if (content !== null && checkForMathSymbols(content)) {
        let value = eval(replaceUnicode(input.value));
        bottomInput.value = value;
    }

}



export default evalBelow;