//Declaramos a classe e-mail
class EmailExemplo {
    //A class tem atributos
    assunto;
    corpo;
    //Aqui fazemos um encapsulamento, para dados sensíveis, quem tem acesso a ele é somente a class
    private endereco;

    //Declaro o metodo privado aqui no construtor e o que estiver no construtor é são os primeiros metodos a serem declarados da classe
    constructor(endereco, assunto, corpo) {
        this.endereco = endereco;
        this.assunto = assunto;
        this.corpo = corpo;

        this.validate();
    }

    //O metodo(ação) da class é enviar email
    enviarEmail(assunto, corpo) {
        return {
            //Pre instanciarmos criamos objetos que recebem nosso atributos
            subject: assunto,
            body: corpo,
            address: this.endereco
        }
    };   
    
    private validate() {
        if(!this.endereco) {
            throw new Error('Endereço de email não fornecido')
        }
    };
}

const endereco = 'teste@teste.com';
const assunto = 'Olá';
const corpo = 'Texto para ser enviado';

//Pra usarmos a class temos que instanciar ela
const emailInstance = new EmailExemplo(endereco, assunto, corpo);

//A partir do momento que ela é instancia, podemos acessar os atributos da classe
emailInstance.enviarEmail(assunto, corpo);
emailInstance.assunto;