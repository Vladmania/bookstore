const poll = require('../bazaData')

class BasketControler {
    async addInBacket(req, res){
        const {name,price,quantity,img, idUser, idProd} = req.body
        await poll.query(`INSERT INTO products_in_baskets (name,price,quantity,img, idUser, idProd) values ($1, $2, $3, $4, $5, $6) RETURNING *`, [name,price,quantity,img,idUser,idProd])
        const prod = await poll.query('SELECT * FROM products_in_baskets where idUser = $1 ', [idUser])
        res.json(prod.rows)
    }
    async getBacket(req, res){
        const id = req.query.idUser
        const prod = await poll.query('SELECT * FROM products_in_baskets where idUser = $1', [id])
        res.json(prod.rows)

    }
    async deleteFromBacket(req, res){
        const id = req.params.id
        const prod = await poll.query('DELETE FROM products_in_baskets where id = $1', [id])
        res.json(prod.rows[0])

    }
}

module.exports = new BasketControler()