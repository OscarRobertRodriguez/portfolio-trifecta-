// import scss
require("stylesheets/main.scss");

//import images
require('images/calculator.jpg');
require('images/takephoto.jpg');
require('images/nav-boat.jpg');
require('images/puzzle.jpg');




const myPhotoTag = document.querySelector(".me-photo"),
    octocatIconTags = [...document.querySelectorAll(".octocat-icon")],
    launchIconTags = [...document.querySelectorAll(".launch-icon")],
    contactCardIconTags = [...document.querySelectorAll('.contact-card__front-side__links__link__icon')],
    flipTagFront = document.querySelector('.contact-card__front-side__flip-btn__img'),
    flipTagBack = document.querySelector('.contact-card__back-side__flip-btn__img'),
    backSide = document.querySelector('.contact-card__back-side');

// add github icons to all locations
octocatIconTags.forEach(icon => icon.src = require("images/github.png"));
launchIconTags.forEach(icon => icon.src = require("images/launch-icon.png"));
flipTagFront.src = require('images/flip.png');
flipTagBack.src = require('images/flip.png');


// add icon link images for contact card
contactCardIconTags[0].src = require('images/github1.png');
contactCardIconTags[1].src = require('images/twitter.png');
contactCardIconTags[2].src = require('images/linkedin.png');

//import js modules
// import openCloseMobileMenu from './assets/js/openCloseMobileMenu';
import openAndCloseAccordion from "./assets/js/openAndCloseAccordion";
import flipCard from "./assets/js/flipCard";

// set up our variables

const accordions = document.querySelectorAll(".accordion-title");

//event listener to open and close mobile menu when hamburger is clicked

[...accordions].forEach(accordion =>
    accordion.addEventListener("click", openAndCloseAccordion)
);

//listener to flip card 

flipTagFront.addEventListener('click', flipCard);
flipTagBack.addEventListener('click', flipCard);