//let myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';

let myVariable = 'Bob';
myVariable = 'Steve';

//alert('hello!')

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
/*
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

let myImage = document.querySelector('img');
myImage.onClick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image1.png') {
        myImage.setAttribute('src', 'images/image2.png');
    } else {
        myImage.setAttribute('src', 'images/image1.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onClick = function() {
    setUserName();
}