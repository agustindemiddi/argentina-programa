const exercise1 = document.getElementById('exercise1');
const exercise2 = document.getElementById('exercise2');

const toggle = () => {
  exercise1.classList.toggle('hidden');
  exercise2.classList.toggle('hidden');
};

// Exercise 1:

const suma = (a, b, callback) => {
  let c = a + b;
  callback();
};

const run = () =>
  suma(3, 5, () => console.log('La suma se ha realizado exitosamente!'));

// Exercise 2 (using 1 function per operation):

const operand1Input = document.getElementById('operand1');
const operand2Input = document.getElementById('operand2');
const resultInput = document.getElementById('result');

const reset = () => {
  operand1Input.value = '';
  operand2Input.value = '';
  resultInput.value = '';
};

const add = () => {
  const operand1 = parseFloat(operand1Input.value);
  const operand2 = parseFloat(operand2Input.value);
  if (operand1 && operand2) resultInput.value = operand1 + operand2;
};

const substract = () => {
  const operand1 = parseFloat(operand1Input.value);
  const operand2 = parseFloat(operand2Input.value);
  if (operand1 && operand2) resultInput.value = operand1 - operand2;
};

const multiply = () => {
  const operand1 = parseFloat(operand1Input.value);
  const operand2 = parseFloat(operand2Input.value);
  if (operand1 && operand2) resultInput.value = operand1 * operand2;
};

const divide = () => {
  const operand1 = parseFloat(operand1Input.value);
  const operand2 = parseFloat(operand2Input.value);
  if (Number.isNaN(operand1) || Number.isNaN(operand2)) return;
  if (operand1 === 0 && operand2 === 0) {
    resultInput.value = 'Indeterminado';
    setTimeout(() => reset(), 1000);
  }
  if (operand1 !== 0 && operand2 === 0) {
    window.location.href = 'http://endless.horse/';
  }
  if (operand1 !== NaN && operand2 !== 0) {
    resultInput.value = operand1 / operand2;
  }
};

// // Exercise 2 (using 1 function with all operations):

// const addButton = document.getElementById('add');
// const substractButton = document.getElementById('substract');
// const multiplyButton = document.getElementById('multiply');
// const divideButton = document.getElementById('divide');

// const operand1Input = document.getElementById('operand1');
// const operand2Input = document.getElementById('operand2');
// const resultInput = document.getElementById('result');

// const reset = () => {
//   operand1Input.value = '';
//   operand2Input.value = '';
//   resultInput.value = '';
// }

// const basicMath = (operand1, operand2, operation) => {
//   const num1 = parseFloat(operand1);
//   const num2 = parseFloat(operand2);
//   if (operation === '+') resultInput.value = num1 + num2;
//   if (operation === '-') resultInput.value = num1 - num2;
//   if (operation === '*') resultInput.value = num1 * num2;
//   if (operation === '/') resultInput.value = num1 / num2;
// };

// addButton.addEventListener('click', (e) =>
//   basicMath(operand1Input.value, operand2Input.value, e.target.innerText)
// );

// substractButton.addEventListener('click', (e) =>
//   basicMath(operand1Input.value, operand2Input.value, e.target.innerText)
// );

// multiplyButton.addEventListener('click', (e) =>
//   basicMath(operand1Input.value, operand2Input.value, e.target.innerText)
// );

// divideButton.addEventListener('click', (e) =>
//   basicMath(operand1Input.value, operand2Input.value, e.target.innerText)
// );
