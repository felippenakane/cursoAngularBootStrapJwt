import { Person } from "./person";

export class Student extends Person {
  constructor(name: string) {
    super(name);
  }
  public mostraIdade(age: number) {
    console.log("Estudando....");
    super.mostraIdade(200);
  }
}
