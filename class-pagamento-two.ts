class OrquestradorPagamento {
    private way: ProcessadorPagamento;

    constructor(paymentWay: ProcessadorPagamento) {
        this.way = paymentWay;
    }

    tra() {
        this.way.executarPagamento();
    }
}