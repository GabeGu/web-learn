var myHeading = document.querySelector('h1');
var myButton  = document.querySelector('button');
var info      = document.createElement('p');

info.textContent = "this is added by js scripts"
document.body.appendChild(info);

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