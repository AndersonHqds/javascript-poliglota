import { Person } from "./models/person.js";
import { Animal } from "./models/animal.js";
import { ActiveRecord } from "./infra/active-records.js";

(async () => {
  await new ActiveRecord({
    dbName: "db-ar",
    dbVersion: 1,
    mappers: [
      {
        clazz: Person,
        converter: (data) => new Person(data.name, data.surname),
      },
      {
        clazz: Animal,
        converter: (data) => new Animal(data.name),
      },
    ],
  }).init();

  const person = new Person("Anderson", "Silva");
  await person.save();
  const animal = new Animal("Carneiro");
  await animal.save();
  const people = await Person.find();
  console.log(people);
  const animals = await Animal.find();
  console.log(animals);
})();
