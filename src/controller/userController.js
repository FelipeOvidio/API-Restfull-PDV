const bcrypt = require('bcrypt')
const { getUsersAll, getUserEmail, insertUser } = require("../data/dbUsers")
const registerUser = async (req, res) => {
    const { nome, email, senha } = req.body
    try {
        const existEmail = await getUserEmail(email)
        if (existEmail) {
            return res.status(409).json({ mensage: 'Email ja cadastrado' })
        }
        const newUser = {
            nome,
            email,
            senha: await bcrypt.hash(senha, 10)
        }
        await insertUser(newUser)

        const { senha: _, ...dataUser } = newUser

        return res.status(200).json(dataUser)


    } catch (error) {
        console.log(error);

        return res.status(500).json({ mensagem: 'Error interno no servidor' })
    }
}



const listUsersAll = async (req, res) => {
    try {
        const listUsers = await getUsersAll()
        return res.status(200).json(listUsers)
    } catch (error) {
        return res.status(500).json({ menssagem: 'Error interno do servidor' })
    }
}

module.exports = {
    registerUser,
    listUsersAll
}