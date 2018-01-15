let moveAndChangeColor = [
    { 
        transform: 'translateX(0)',
        color: '#000',
    },
    { 
        offset: 1,
        transform: 'translateY(-75px)',
        color: '#000',
    },
    {
        transform: 'translateY(-76px)',
        color: '#000',
    },
]; 




function animateBottomEval () {
  let bottomInput = document.querySelector('.screen_result');
	let value = bottomInput.value;
	let input = document.querySelector('.screen_input');
  let inputStore = input.value;
	let inputSize = input.style.fontSize;
	input.value = '';
	bottomInput.style.fontWeight = 200; 
	bottomInput.style.fontSize = inputSize; 
    let animationInput = bottomInput.animate(moveAndChangeColor, {
   	duration: 300,
   	fill: 'forwards'
   });

    animationInput.addEventListener('finish', function() {
       let bottomInput = document.querySelector('.screen_result');
       let input = document.querySelector('.screen_input');
       bottomInput.style.fontWeight = 400; 
       bottomInput.style.fontSize = '1.3rem';
	     input.value = bottomInput.value; 
	     bottomInput.value = ''; 
       animationInput.cancel();
    })


}; 





export default animateBottomEval; 