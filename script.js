// HAMBURGER MENU TOGGLE
const hamburger = document.querySelector('#hamburger');
const navToggleMenu = document.querySelector('#nav-toggle-menu');
let menuVisibility = false;

const checkVisibility = function () {
    if (menuVisibility === false) {
        navToggleMenu.style.visibility = 'visible';
        menuVisibility = true;
    } else if (menuVisibility === true) {
        navToggleMenu.style.visibility = 'hidden';
        menuVisibility = false;
    };
};

// TOGGLE ON CLICK
hamburger.addEventListener('click', checkVisibility);

// TOGGLE ON HOVER
// hamburger.addEventListener('mouseenter', checkVisibility);
// hamburger.addEventListener('mouseleave', checkVisibility);

/* this bonus requirement isn't working properly yet:
- the nav panel appears and disappears = working
- there is not enough time to click on the items = needs fixing

I have tried putting the same event listeners on navToggleMenu, 
but that (especially in combination with the transition time of it) ended up interfering 
with the false/true statement of menuVisibility. So it messed everything up.

because of the deadline I will leave this as it is for now */

// CHANGING BACKGROUND COLOR ON CLICK
const body = document.querySelector('body');
const colorButtonsArray = Array.from(document.querySelectorAll('#nav-toggle-menu li button'));
console.log(colorButtonsArray);

const changeColor = function () {
    body.classList.remove('pink', 'mustard', 'plum', 'turquoise');  // I want the background to always be black, so I don't remove the class "black" (first class in cascading stylesheet) 
    body.classList.add(this.className);                             // I haven't used toggle for the color toggle, I am not sure if I was suposed to
};

colorButtonsArray.forEach(function (colorButton) {
    colorButton.addEventListener('click', changeColor);
    colorButton.addEventListener('click', checkVisibility);
});