/**
 * Exercício 2: Herança e Métodos
 * Crie uma classe base chamada Animal com uma propriedade name e um método makeSound(). 
 * Em seguida, crie uma classe Dog que herde da classe Animal e substitua o método makeSound() para que ele exiba "Woof". 
 * Crie uma instância da classe Dog e chame o método makeSound().
 */


class Animal {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    makeSound(): void {        
        console.log(`O animal ${this.name}`);
    } 
}

class Dog extends Animal {
    makeSound(): void {
        console.log(`O ${this.name} faz o barulho Woof`);
    }
}

let dog = new Dog('Loirinho');

dog.makeSound();


