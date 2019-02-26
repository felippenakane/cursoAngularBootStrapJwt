import { Dao } from "./dao";
import { DaoInterface } from "./dao-interfaces";
import { Person } from "../lesson01-classes/person";
let dao: DaoInterface<Person> = new Dao<Person>();

let person: Person = new Person("Mike");

dao.insert(person);
