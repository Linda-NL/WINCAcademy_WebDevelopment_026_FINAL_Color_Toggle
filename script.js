// ALL GRABBED ELEMENTS


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
const writtenColorName = document.querySelector('#insertColorName');
console.log(colorButtonsArray);

const changeColor = function (e) {
    console.log(e);
    body.classList.remove('pink', 'mustard', 'plum', 'turquoise');  // I want the background to always be black, so I don't remove the class "black" (first class in cascading stylesheet) 
    body.classList.add(this.className);                             // I haven't used toggle for the color toggle, I am not sure if I was suposed to
    writtenColorName.innerHTML = this.innerHTML;
};

colorButtonsArray.forEach(function (colorButton) {
    colorButton.addEventListener('click', changeColor);
    colorButton.addEventListener('click', checkVisibility);
});

// CHANGING BACKGROUND COLOR BY PRESSING NUMBERS
const changeColorByNumber = function(e) {
    console.log(e);
    body.classList.remove('pink', 'mustard', 'plum', 'turquoise');
    body.classList.add(e.className); 
    writtenColorName.innerHTML = e.innerHTML;
};

const colorByNumber = function(e) {
    if (e.which === 49) {
        button = colorButtonsArray[0];
        changeColorByNumber(button);
    } else if (e.which === 50) {
        button = colorButtonsArray[1];
        changeColorByNumber(button);
    } else if (e.which === 51) {
        button = colorButtonsArray[2];
        changeColorByNumber(button);
    } else if (e.which === 52) {
        button = colorButtonsArray[3];
        changeColorByNumber(button);
    } else if (e.which === 53) {
        button = colorButtonsArray[4];
        changeColorByNumber(button);
    };  
};

document.addEventListener('keypress', colorByNumber);

/* I wanted to put the individual array items through the previously made changeColor function,
for example: changeColor(colorButtonsArray[1]);

But this isn't working and I would like to now why.
To me it seems similar to what I did before by iterating over the array using .forEach (array method)
and putting the result as a parameter into the changeColor function.

Apparently the output of the array method (connected to an event) is not equal to an individual array item.
I can see a difference when I log the input in the console:
- the output of the array method gives me everything about the mouseEvent with the specific button as a target
- the individual array item gives me the item as it is written in the DOM

Is there a way to use the indivial array item inside the changeColor function? 
I ended up making a new function and only replacing 'this' with 'e'. */