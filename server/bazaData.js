const { Pool } = require('pg')

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "240895",
    port: "5432",
    database: "bookstore",
})


module.exports = pool