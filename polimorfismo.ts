class Usuario {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    salvar(): void {
        console.log(`Usuário "${this.nome}" salvo no banco de dados.`);
    }
}

class ProdutoExemplo {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    salvar(): void {
        console.log(`Produto "${this.nome}" salvo no banco de dados`);
    }
}

class Repository {
    salvarItem(item: any): void {
        item.salvar();
    }
}

// Exemplos de uso das classes

const usuario = new Usuario('Alice');
const produtoExemplo = new ProdutoExemplo('Celular');

const repository = new Repository();
repository.salvarItem(usuario);
repository.salvarItem(produtoExemplo);