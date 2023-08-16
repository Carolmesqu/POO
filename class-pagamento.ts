// Pagamento
// Diferentes metodos

interface ProcessadorPagamento {
    executarPagamento();
} //Temos uma interface que tem o método de executar o pagamento

class Pagamento {  
    private way : ProcessadorPagamento;

    //A primeira informação da nossa classe que é chamada quando ela for instanciada é o constructor
    constructor(paymentWay: ProcessadorPagamento) {
        this.way = paymentWay;        
    }

    pagar(): void {
        this.way.executarPagamento();
    };
} //A class pagamento está como função de orquestrar pagamento, ela não faz pagamento, ela orquestra

class PagamentoCartao implements ProcessadorPagamento {
    executarPagamento() {
        console.log('Cartão');
    };
}

class PagamentoPix implements ProcessadorPagamento {
    executarPagamento() {
        console.log('Pix');
    };
}

const metodoPagamento = new PagamentoCartao();
const pagar = new Pagamento(metodoPagamento);
pagar.pagar();

// const pagamentoCartao = new PagamentoCartao('Cartão de Crédito');
// pagamentoCartao.pagar();

// const pagamentoPix = new Pagamento('Pix');
// pagamentoPix.pagar();