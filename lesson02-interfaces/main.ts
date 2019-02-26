import { Person } from "./../lesson01-classes/person";
import { PersonDao } from "./person-dao";
import { DaoInterface } from "./dao-interfaces";
let personDao: DaoInterface = new PersonDao();
let person: Person = new Person("Mike");

personDao.insert(person);
