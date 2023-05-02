const poll = require('../bazaData')


class FeedbacksControler {
    async addFeedback(req, res){
        const {idProd, name, avatar, feedback} = req.body
        await poll.query(`INSERT INTO feedbacks (idProd, name, avatar, feedback) values ($1, $2, $3, $4) RETURNING *`, [idProd, name, avatar, feedback])
        const prod = await poll.query('SELECT * FROM feedbacks where idProd = $1 ', [idProd])
        res.json(prod.rows)
    }
    async getFeedback(req, res){
        const idProd = req.params.id
        const prod = await poll.query('SELECT * FROM feedbacks where idProd = $1', [idProd])
        res.json(prod.rows)

    }
}

module.exports = new FeedbacksControler()