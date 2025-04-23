const nameInput = document.getElementById('nameInput');
const submitButton = document.getElementById('submitButton');
const output = document.getElementById('output');


submitButton.addEventListener('click', () => {
  const userName = nameInput.value;
  if (userName) {
    output.textContent = `Hello, ${userName}!`;
  } else {
    output.textContent = 'Please enter your name.';
  }
});


nameInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    submitButton.click(); 
  }
});