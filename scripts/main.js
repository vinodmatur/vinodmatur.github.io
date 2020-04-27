// const myHeading = document.querySelector('h1');
//  myHeading.textContent = 'Hello World';

 let myImg = document.querySelector('img');

 myImg.onclick = function(){
     let mySrc = myImg.getAttribute('src');
     if(mySrc === 'images/firefox-icon.png'){
         myImg.setAttribute('src', 'images/firefox.png');
     }else{
         myImg.setAttribute('src', 'images/firefox-icon.png');
     }
 }


 // Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }