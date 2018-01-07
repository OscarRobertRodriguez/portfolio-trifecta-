




export default function openCloseMobileMenu ( ) {
	var bodySelector = document.getElementsByTagName('body')[0]; 
    var sideMenu = document.querySelector('.menu-sidebar');
	sideMenu.classList.toggle('menu-open');  
    bodySelector.classList.toggle('body-push__right');
    
}