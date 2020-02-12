// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World!";

// let iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//     document.write('yeh, i have a chocolate ice ccream');
// } else {
//     document.write('awwww, but chocolate is my avourite');
// }

// function multiply(a, b) {
//     let result = a * b;
//     return result;
//     //document.getElementById('demo').innerHTML = result;
// }
// multiply(8, 9);

// document.querySelector('html').onclick = function () {
//     alert('hello webpage');
// }

 let myImage = document.querySelector('img');

 myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
   if (mySrc === 'images/chrome.png') {
        myImage.setAttribute('src', 'images/all-browser.png');
    } else {
       myImage.setAttribute('src', 'images/chrome.png');
    }
}

// Adding a personalized welcome message

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('please enter your name');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Chrome is cool, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Chrome is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}

















