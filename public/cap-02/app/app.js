import { Person } from "./models/person.js";
import { Animal } from "./models/animal.js";
import { SessionFactory } from "./infra/session-factory.js";

(async () => {
  const session = await new SessionFactory({
    dbName: "db-dm",
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
  }).openSession();

  const person = new Person("Anderson", "Silva");
  const animal = new Animal("Cachorro");

  await session.save(person);
  await session.save(animal);

  const people = await session.list(Person);
  people.forEach((person) => console.log(person.getFullName()));
  const animals = await session.list(Animal);
  console.log(animals);
})().catch(console.log);
