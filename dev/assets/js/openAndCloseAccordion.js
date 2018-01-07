


export default function openAndCloseAccordion() {


   [...document.getElementsByClassName('accordion-title')].forEach(item => item.setAttribute('data-open', 'false'));
   [...document.getElementsByClassName('accordion-content')].forEach(item => item.classList.remove('accordion__active'));

   if (this.getAttribute('data-open') === 'false') {
   	    this.nextSibling.nextSibling.classList.add('accordion__active'); 
   	    this.setAttribute('data-open', 'true');   
   }

  
  

}; 