/**
 * Exercício 4: Polimorfismo
 * Crie uma interface chamada Shape com um método calculateArea(). 
 * Em seguida, crie duas classes que implementem essa interface: Circle e Rectangle. 
 * Implemente o método calculateArea() para cada uma delas de acordo com sua fórmula. 
 * Crie instâncias de ambas as classes e calcule as áreas.
 */

interface Shape {
    calculateArea(): string;
}

class Circle implements Shape {
    area: string;
    raio: number;
    pi: number;

    constructor(area: string, raio: number, pi: number) {
        this.area = area;
        this.raio = raio;
        this.pi = pi;
    }

    calculateArea(): string {
        const area = this.pi * (this.raio * this.raio);
        return `A área do círculo é ${area}`;
    }
}

class Rectangle implements Shape {
    area: string;
    base: number;
    altura: number;

    constructor(area: string, base: number, altura: number) {
        this.area = area;
        this.base = base;
        this.altura = altura;
    }

    calculateArea(): string {
        const area = this.base * this.altura;
        return `A área do retângulo é ${area}`;
    }
}

let circle = new Circle('Area', 3, Math.PI);
let rectangle = new Rectangle('Area', 12, 5);

let shapes: Shape[] = [circle, rectangle];

shapes.forEach(shape => {
    console.log(shape.calculateArea());
});
