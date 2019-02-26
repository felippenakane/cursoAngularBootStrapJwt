export class Person {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }
  public mostraIdade(age: number): void {
    console.log(`${this.name} tem ${age} anos de idade`);
  }

  public toString(): string {
    return `Classe Person, o nome ${this.name} foi inserido na base`;
  }
}
