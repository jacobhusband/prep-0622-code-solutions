function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

const minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

function getGreeting(name) {
  return `Hello ${name}!`;
}

console.log('greeting', getGreeting('Jacob'));

const addAndMultiplyBy5 = (num1, num2) => (num1 + num2) * 5;

console.log('add and multiply by 5', addAndMultiplyBy5(10, 5));

const multiplyAndDivideBy5 = (num1, num2) => (num1 * num2) / 5;

console.log('multiply nums together and divide by 5', multiplyAndDivideBy5(35, 10));

const subtractTwoNumbers = (num1, num2) => (num1 - num2);

console.log('subtract second number from first number', subtractTwoNumbers(22, 7));

const getCircleCircumference = radius => (Math.PI * 2 * radius);

console.log('find circle circumference, given radius', getCircleCircumference(5));

const getFullName = (firstName, lastName) => (`${firstName} ${lastName}`);

console.log('give full name', getFullName('Juan', 'Ramirez'));

const cube = number => (number * number * number);

console.log('cube the input', cube(5));
