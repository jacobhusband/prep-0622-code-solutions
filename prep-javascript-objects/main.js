const person = {
  firstName: 'Jacob',
  lastName: 'Husband',
  hobby: 'Reading'
};

console.log(person);
console.log(`The person's name is ${person.firstName} ${person.lastName}.`);
person.job = 'Technical Assistant';
console.log(`The person's job is: ${person.job}.`);
person.previosJob = 'Waiter';
console.log(`The person's previous job was: ${person.previosJob}.`);
console.log(person);
