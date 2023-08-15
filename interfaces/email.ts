interface Email {
    send(): void;
}

interface Pagamento {
    executePayment(): void;
}

class OrquestradorPagamento implements Email, Pagamento {
    send(): void {
        
    }

    executePayment(): void {
        
    }
}

class UserEmail implements Email {
    send(): void {
        
    }
}
  