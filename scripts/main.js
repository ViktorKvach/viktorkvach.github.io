//Изменение эмблемы 
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ford.jpg') {
      myImage.setAttribute ('src','images/ford-new.jpg');
    } else {
      myImage.setAttribute ('src','images/ford.jpg');
    }
}

//Приветственное сообщение
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');


function setUserName() {
	var myName = prompt('Plese enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Ford is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Ford is cool, ' + storedName;
}

// Замена имени пользователя
myButton.onclick = function() {
  setUserName();
}