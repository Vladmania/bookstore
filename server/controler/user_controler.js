const poll = require('../bazaData')
const fileMiddleware = require('../middleware/file')


class UserControler {
    async addUser(req, res){
        const {login, password, fio, birthDate, email, tel, gender, avatar} = req.body
        const newProd = await poll.query(`INSERT INTO client (login, password, fio, birthDate, email, tel, gender, avatar) values ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`, [login, password, fio, birthDate, email, tel, gender, avatar])
        console.log(newProd.rows[0]);
    }
    async loginUser(req, res){
        const {login, password} = req.body
        const prod = await poll.query('SELECT * FROM client where login = $1 and password = $2', [login, password])
        res.json(prod.rows[0])

    }
    async Users(req, res){
        
        const prod = await poll.query('SELECT * FROM client')
        res.json(prod.rows)

    }
    async editorDataUser(req, res){
        const {id, fio, birthDate, email, tel, gender} = req.body
        const prod = await poll.query(`UPDATE client SET fio = $1, birthDate = $2, email = $3, tel = $4, gender = $5 where id = $6 RETURNING *`, [fio, birthDate, email, tel, gender, id])
        res.json(prod.rows[0])
    }
    async editorDataUserAvatar(req, res){
        if(req.file){
            const {id} = req.body
            const avatar = req.file.path
            const prod = await poll.query(`UPDATE client SET avatar = $1 where id = $2 RETURNING *`, [avatar, id])
            res.json(prod.rows[0])
        }
    }
    async deleteUser(req, res){
        const id = req.params.id
        const prod = await poll.query('DELETE FROM client where id = $1', [id])
        res.json(prod.rows[0])
    }
}

module.exports = new UserControler()