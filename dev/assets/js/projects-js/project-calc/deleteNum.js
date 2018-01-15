 function deleteNum() {
     let input = document.querySelector('.screen_input');

     input.value = input.value.slice(0, input.value.length - 1);
 }


export default deleteNum;