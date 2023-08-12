/**
 * Exercício 5: Composição
 * Crie uma classe Author com propriedades name e books (um array de strings). 
 * Em seguida, crie uma classe Book com propriedades title e author (instância da classe Author). 
 * Crie uma instância da classe Author e adicione algumas obras a ela, criando instâncias da classe Book.
 * 
 * A composição envolve criar classes que têm referências a outras classes. 
 * No caso do exercício, você precisa criar uma classe Author que tem uma propriedade books, que é um array de instâncias da classe Book.
 */

class Author {
    name: string;
    books: Book[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addBook(title: string): void {
        const book = new Book(title, this);
        this.books.push(book);
    }
}

class Book {
    title: string;
    author: Author;

    constructor(title: string, author: Author) {
        this.title = title;
        this.author = author;
    }
}

const author = new Author("J.K. Rowling");

author.addBook("Harry Potter and the Sorcerer's Stone");
author.addBook("Harry Potter and the Chamber of Secrets");
author.addBook("Harry Potter and the Prisoner of Azkaban");

author.books.forEach(book => {
    console.log(`Author: ${author.name}, Book: ${book.title}`);
});

/**
 * Neste código, a classe Author possui uma propriedade books, que é um array de instâncias da classe Book. 
 * A classe Book possui uma propriedade author, que é uma referência à instância de Author que criou o livro.
 * Quando você cria uma instância de Author e adiciona livros a ela usando o método addBook(), uma nova instância de Book é criada para cada livro, e o livro é associado ao autor. 
 * Em seguida, o código itera sobre os livros do autor e exibe o nome do autor e o título de cada livro.
 */