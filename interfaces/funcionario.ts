interface Funcionario {
    nome: string;
    salario: number;
    calcularSalario(): number;
}

abstract class Salario {

    getValue(): number {
        return 50;
    }

    // abstract valueGet(): number;
}

class Gerente extends Salario implements Funcionario {
    nome: string;
    salario: number;
    bonus: number;

    constructor(nome: string, salario: number, bonus: number) {
        super();
        this.nome = nome;
        this.salario = salario;
        this.bonus = bonus;
    }

    calcularSalario(): number {
        return this.salario + this.bonus;
    }
}

//Exemplo de uso:

const funcionario = new Gerente("Jorel", 300, 200);
funcionario.getValue();

const gerente = new Gerente("Jurema", 2800, 718);
console.log(gerente.nome);
console.log(gerente.calcularSalario);