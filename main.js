const section = document.querySelector('section');
const logo = document.querySelector('.logo');
const fps = 60; // frames per second, will use to create smooth logo movement

section.style.height = window.innerHeight + 'px';
section.style.width = window.innerWidth + 'px';

// Logo velocity variables
let xPosition = 10;
let yPosition = 10;
let xSpeed = 3;
let ySpeed = 3;

// Create function to move the logo
function moveLogo() {
    // Because the logo is absolutely positioned, we can manipulate the top and left properties
    logo.style.left = xPosition + 'px';  
    logo.style.top = yPosition + 'px';
}

setInterval(() => {
   /*  Logo should bounce in opposite direction when it hits a "wall", the window.innerWidth. If the logo's height and width + it's speed are equal to or greater than the innerWidth and/or innerHeight, bounce logo in opposite direction. */
    if (xPosition + logo.clientWidth >= window.innerWidth || xPosition <= 0){
        // Negate xSpeed and ySpeed to move in opposite direction
        xSpeed = -xSpeed;
        logo.style.fill = makeRandomColor();
    }
    if (yPosition + logo.clientHeight >= window.innerHeight || yPosition <= 0){
        ySpeed = -ySpeed;
        logo.style.fill = makeRandomColor();
    }
    xPosition += xSpeed;
    yPosition += ySpeed;

    moveLogo();
}, 1000/fps);

// Create function that will generate random hex colors
// return the hex color and change the logo style inside the if statement of setInterval function. 
function makeRandomColor() {
    let color = '#';
    color += Math.random().toString(16).slice(2,8).toUpperCase();
    return color;
}

// Add resize event listener on window 
// On window resize, logo will return to starting position and the section element will be resized appropriately
// This will allow user to resize browser and logo will always remain in viewing space

window.addEventListener('resize', () => {
    xPosition = 10;
    yPosition = 10;

    section.style.height = window.innerHeight + 'px';
    section.style.width = window.innerWidth + 'px';
});





