const poll = require('../bazaData')

class ProductControler {
    async addProduct(req, res){
        const {name,price,description,img} = req.body
        const newProd = await poll.query(`INSERT INTO products (name,price,description,img) values ($1, $2, $3, $4) RETURNING *`, [name,price,description,img])
        console.log(newProd.rows[0]);
    }
    async alladdProduct(req, res){
        const prod = await poll.query('SELECT * FROM products')
        res.json(prod.rows)

    }
    async deleteProduct(req, res){
        const id = req.params.id
        const prod = await poll.query('DELETE FROM products where id = $1', [id])
        res.json(prod.rows[0])
    }
}

module.exports = new ProductControler()