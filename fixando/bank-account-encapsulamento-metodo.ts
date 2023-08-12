/**
 * Exercício 3: Encapsulamento e Métodos 
 * Crie uma classe BankAccount com propriedades privadas balance e owner. 
 * Implemente métodos para depositar e sacar dinheiro, garantindo que o saldo nunca fique negativo. 
 * Crie uma instância da classe BankAccount e realize algumas operações de depósito e saque.
 */

class BankAccount {
    private balance: number;
    private owner: string;

    constructor(balance: number, owner: string) {
        this.balance = balance;
        this.owner = owner;
    }

    depositaDinheiro(valor: number): void {
        this.balance += valor;
        console.log(`Depósito de ${valor} na conta ${this.owner} efetuado com sucesso`);
    }

    sacaDinheiro(valor: number): void {
        if (this.balance < valor) {
            console.log(`Saldo insuficiente para saque na conta ${this.owner}`);
        } else {
            this.balance -= valor;
            console.log(`Saque de ${valor} da conta ${this.owner} efetuado com sucesso, saldo disponível: ${this.balance}`);
        }
    }
}

let conta = new BankAccount(60, 'Conta: 0000-000');

conta.depositaDinheiro(100);
conta.sacaDinheiro(70);
conta.sacaDinheiro(50);
