interface Repository {
    get(): string;
    create(): void;
}

abstract class BaseRepository {
    getAbstract(): string {
        return "Essa é a visualização dos usuários";
    }

    createAbstract(): void {
        console.log("Usuário criado!");
    }
}

class UserRepository extends BaseRepository implements Repository {
    get(): string {
        return "Essa é a visualização dos usuários";
    }

    create(): void {
        console.log("Usuário criado!");
    }
}

// Exemplo de uso:

const user = new UserRepository();
user.createAbstract();
user.getAbstract();