// Get Inputs from DOM
var button, text;
button = document.querySelector('.button');
text = document.querySelector('.output_txt');

// Event listeners
document.querySelector('.age').addEventListener('keypress', (e) => {
  if(e.key === 'Enter'){
    changeText();
  }
});

button.addEventListener('click', changeText);

// Calculate Age Function
function changeText() {
var name = document.querySelector('.name').value;
var age = document.querySelector('.age').value;
text.textContent = `${name} is ${2020 - age} years old`;
};
