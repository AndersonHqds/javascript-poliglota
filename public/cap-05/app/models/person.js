import { logExecutionTime, inspectMethod } from "../decorators/decorators.js";
import { decorate } from "../infra/decorate.js";
export class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  //   getFullName() {
  //     console.time("getFullName");
  //     const fullName = `${this.name} ${this.surname}`;
  //     console.timeEnd("getFullName");
  //     return fullName;
  //   }

  //   speak(text) {
  //     console.time("speak");
  //     const phrase = `${this.name} esta falando... ${text}`;
  //     console.timeEnd("speak");
  //     return phrase;
  //   }

  getFullName() {
    const fullName = `${this.name} ${this.surname}`;
    return fullName;
  }

  speak(text) {
    const phrase = `${this.name} esta falando... ${text}`;
    return phrase;
  }
}

decorate(Person, {
  speak: [logExecutionTime, inspectMethod()],
  getFullName: [logExecutionTime, inspectMethod],
});
