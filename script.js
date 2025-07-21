//this is single line comment in JavaScript

/*this is a 
multi-line
comment in JavaScript*/

var clickCount = 0;
var countButton = document.getElementById('countButton');
var countDisplay = document.getElementById('countDisplay');

countButton.addEventListener('click', counter);

function counter(){
  clickCount++;
  console.log(clickCount);
  countDisplay.innerHTML = clickCount; 
}