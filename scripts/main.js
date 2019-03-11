var myHeading = document.querySelector('h1');
var myButton  = document.querySelector('button');

function setUserName() {
    var myName = prompt('please, enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello, World! ' + myName;
}

if (!localStorage.getItem('name')) {
    setUserName();
}
else {
    var storeName = localStorage.getItem('name');
    myHeading.textContent = 'Hello, World! ' + storeName;
}

myButton.onclick = function () {
    setUserName();
}