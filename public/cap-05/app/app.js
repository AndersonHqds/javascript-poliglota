import { Person } from "./models/person.js";
// import { logExecutionTime, inspectMethod } from "./decorators/decorators.js";
// import { decorate } from "./infra/decorate.js";
// const method = Person.prototype.speak;
// Person.prototype.speak = function (...args) {
//   console.log(`Argumentos do método: ${args}`);
//   console.time("speak");
//   const result = method.bind(this)(...args);
//   console.timeEnd("speak");
// };

// decorate(Person, {
//   speak: [logExecutionTime, inspectMethod()],
//   getFullName: [logExecutionTime, inspectMethod],
// });

const person = new Person("Anderson", "Henrique");
person.speak("Ola");
