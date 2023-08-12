class Mensagem1 {
    remetente: string;

    constructor(remetente: string) {
    this.remetente = remetente;
    }

    enviar(): void {
        console.log(`Mensagem enviada por ${this.remetente}`);
    }
}

class Email2 extends Mensagem1 {
    destinatario: string;
    assunto: string;
    corpo: string;

    constructor(remetente: string, destinatario: string, assunto: string, corpo: string) {
        super(remetente);
        this.destinatario = destinatario;
        this.assunto = assunto;
        this.corpo = corpo;
    }

    enviar(): void {
        console.log(`Enviando email de ${this.remetente} para ${this.destinatario}`);
        console.log(`Assunto: ${this.assunto}`);
        console.log(`Corpo:${this.corpo}`);
        console.log(`E-mail enviado com sucesso!`);
    }
}

class SMS1 extends Mensagem1 {
    destinatario: string;
    mensagem: string;
   
    constructor(remetente: string, destinatario: string, mensagem: string) {
        super(remetente);
        this.destinatario = destinatario;
        this.mensagem = mensagem;
       
    }

    enviar(): void {
        console.log(`Enviando SMS de ${this.remetente} para ${this.destinatario}`);
        console.log(`Mensagem: ${this.mensagem}`);    
        console.log(`E-mail enviado com sucesso!`);
    }
}

//Exemplo de uso das classes

const email1 = new Email('remetente@exemplo.com', 'destinatario@exemplo.com', 'Assunto exemplo', 'Corpo exemplo');
email1.enviar();

const sms1 = new SMS('remetente', 'destinatario', 'Olá, tudo bem?');
sms1.enviar();