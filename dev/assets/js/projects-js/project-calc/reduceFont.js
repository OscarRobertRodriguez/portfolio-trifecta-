
function reduceFont() {
     let input = document.querySelector('.screen_input');

     input.value.length > 8 ? input.style.fontSize = '1.9rem' : input.style.fontSize = '4rem';

 }


export default reduceFont; 