interface ProcessadorPagamento {
    executarPagamento();
} 

class PagamentoErrado {  
    private way : ProcessadorPagamento;
   
    constructor(metodo: string) {
        //Dessa forma tiramos a escalabilidade do código e a flexibilidade do código
        //Acoplamento de codigo, não devemos fazer isso. Quando criamos uma classe precisamos pensar na escabilidade
        //Não instanciamos um classe dentro da outra.
        if(metodo === 'cartao') {
            this.way = new PagamentoCartaoErrado;        
        }
        if(metodo === 'pix') {
            this.way = new PagamentoPixErrado;        
        }
    }

    pagar(): void {
        this.way.executarPagamento();
    };
}

class PagamentoCartaoErrado implements ProcessadorPagamento {
    executarPagamento() {
        console.log('Cartão');
    };
}

class PagamentoPixErrado implements ProcessadorPagamento {
    executarPagamento() {
        console.log('Pix');
    };
}

// const metodoPagamento = new PagamentoCartaoErrado();
// const pagar = new PagamentoErrado(metodoPagamento);
// pagar.pagar();
