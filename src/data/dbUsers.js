const knex = require('../conexao')

module.exports = {
    async getUsersAll() {
        const listUser = await knex.select('id', 'nome', 'email').from('usuarios')
        return listUser
    },

    async getUserEmail(email) {
        const existEmail = await knex('usuarios').where({ email }).first()
        if (existEmail) {
            return true
        }

        return existEmail

    },

    async insertUser(user) {
        return await knex('usuarios').insert(user)
    }

}