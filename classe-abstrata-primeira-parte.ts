// A abstração basicamente é um modelo de uma classe
abstract class Mensagem {
    remetente: string;
    destinatario: string;
    assunto: string;
    corpo: string;

    constructor(remetente: string, destinatario: string, assunto: string, corpo: string) {
        this.remetente = remetente;
        this.destinatario = destinatario;
        this.assunto = assunto;
        this.corpo = corpo;
    }   

    // O método abstrato só tem um modelo, não tem uma implementação 
    abstract enviar(): void;
}

class Email extends Mensagem {
    // Se o método fosse concreto está implementação trocaria de lugar com o método abstrato na linha 16
    enviar(): void {
        console.log('Enviando e-mail...');
        console.log('Remetente: ', this.remetente);
        console.log('Destinatário: ', this.destinatario);
        console.log('Assunto: ', this.assunto);
        console.log('Corpo: ', this.corpo);
    }
    
    constructor(remetente: string, destinatario: string, assunto: string, corpo: string) {
        super(remetente, destinatario, assunto, corpo);
    }

    validate() {
        if(this.remetente && this.remetente !== '') {
            console.log('Existe um e-mail de remetente')
        } else {
            console.log('O e-mail do remetente está vazio, por favor preencha')
        }
    }
}

class SMS extends Mensagem {
    // Se o método fosse concreto, está implementação trocaria de lugar com o método abstrato na linha 16
    enviar(): void {
        console.log('Enviando e-mail...');
        console.log('Remetente: ', this.remetente);
        console.log('Destinatário: ', this.destinatario);
        console.log('Assunto: ', this.assunto);
        console.log('Corpo: ', this.corpo);
    }
}

// Exemplo de uso das classes

const email = new Email('remetente@exemplo.com', 'destinatario@exemplo.com', 'Assunto exemplo', 'Corpo exemplo');
email.enviar();

const sms = new SMS('remetente@exemplo.com', 'destinatario@exemplo.com', 'Assunto exemplo', 'Corpo exemplo');
sms.enviar();

/**
 * Por que utilizarmos uma classe abstrata? Um exemplo se fossemos fazer uma modelagem de sistema 
 * onde queremos fazer o envio de e-mail, por questão de escalabilidade uma mensagem ela tem que ter
 * todas as caracteristicas mas o e-mail pode não precisa ter, se formos fazer um projeto que faz o
 * envio de mensagem é interessante ter classes abstratas de mensagem, de envio de mensagem.
 * Com a abstração conseguimos diminuir o código.
 */