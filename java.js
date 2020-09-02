// Get Inputs from DOM
var button, text;
button = document.querySelector('.button');
text = document.querySelector('.output_txt');
title = document.querySelector('.title');

// Event listeners
document.querySelector('.age').addEventListener('keypress', (e) => {
  if(e.key === 'Enter'){
    e.preventDefault();
    changeText();
  }
});

button.addEventListener('click', changeText);
title.addEventListener('click', function() {
  name.value = '0'
})

// Calculate Age Function
function changeText() {
var name = document.querySelector('.name').value;
var age = document.querySelector('.age').value;
text.textContent = `${name} is ${2020 - age} years old`;
};
