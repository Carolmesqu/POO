
/**
 * Exercício 1: Criando uma Classe e Instâncias
 * Crie uma classe chamada Person com propriedades name e age. 
 * Crie duas instâncias da classe Person e atribua valores às propriedades. 
 * Em seguida, implemente um método que exiba o nome e a idade da pessoa.
 */

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    displayNameAge(): void {
        console.log(`Meu nome é ${this.name} e a minha idade é ${this.age}`);
    }
}

let person = new Person('Carolina', 27);

person.displayNameAge();