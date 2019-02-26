import { DaoInterface } from "./dao-interfaces";
import { Person } from "../lesson01-classes/person";
export class PersonDao implements DaoInterface {
  tablename: string;

  insert(person: Person): boolean {
    console.log(`Inserindo ... ${person.toString()}`);

    return true;
  }
  update(person: Person): boolean {
    return true;
  }
  delete(id: number): boolean {
    return true;
  }
  find(id: number): Person {
    return null;
  }
  findAll(): [Person] {
    return [new Person("gerall")];
  }
}
