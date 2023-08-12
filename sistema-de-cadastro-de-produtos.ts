class Produto {
    nome: string;
    preco: string;
    quantidade: number;    
    
    constructor(nome: string, preco: string, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }    
}

class Estoque extends Produto {
    criarProduto(): string {
        return `O produto ${this.nome} foi inserido no estoque, com a quantidade ${this.quantidade} e preço unitário ${this.preco}`;
    }

    atualizarProduto(): string {
        return `O produto ${this.nome} teve sua quantidade alterada no estoque para ${this.quantidade}`;
    }

    listarProdutos(): string {
        return `Lista de produtos disponiveis em estoque nome: ${this.nome}, preço: ${this.preco}, quantidade: ${this.quantidade}`;
    }

    deletarProduto(): string {
        return `O produto ${this.nome} foi removido com sucesso`;
    }
}

let produto = new Estoque('Guarana', 'R$ 3,00', 10);

console.log(produto.criarProduto());
//O produto Guarana foi inserido no estoque, com a quantidade 10 e preço unitário R$ 3,00

produto.quantidade = 20;
console.log(produto.atualizarProduto());
//O produto Guarana teve sua quantidade alterada no estoque para 20

console.log(produto.listarProdutos());
//Lista de produtos disponiveis em estoque nome Guarana, R$ 3,00, 20

console.log(produto.deletarProduto());
//O produto Guarana foi removido com sucesso
