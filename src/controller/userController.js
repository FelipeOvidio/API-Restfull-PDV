const { getUsersAll } = require("../data/dbUsers")


const listUsersAll = async (req, res) => {
    try {
        const listUsers = await getUsersAll()
        return res.status(200).json(listUsers)
    } catch (error) {
        return res.status(500).json({ menssagem: 'Error interno do servidor' })
    }
}

module.exports = {
    listUsersAll
}