class BaseRepository {
    get() {
        console.log('pegando informação');
    }

    create() {
        console.log('criando informação');
    }
}

class UserRepository extends BaseRepository {
    getByUserId() {
        console.log('pega por user id');
    }
}

const user = new UserRepository();