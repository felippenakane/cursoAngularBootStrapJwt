import { DaoInterface } from "./dao-interfaces";
import { Person } from "../lesson01-classes/person";
export class Dao<T> implements DaoInterface<T> {
  tablename: string;

  insert(object: any): boolean {
    console.log(`Inserindo ...`);

    return true;
  }
  update(object: any): boolean {
    return true;
  }
  delete(id: number): boolean {
    return true;
  }
  find(id: number): T {
    return null;
  }
  findAll(): [T] {
    return [null];
  }
}
