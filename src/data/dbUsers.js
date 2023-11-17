const knex = require('../conexao')

module.exports = {
    async getUsersAll() {
        const listUser = await knex.select('id', 'nome', 'email').from('usuarios')
        return listUser
    }

}