const Pool = require("pg").Pool;

const pool = new Pool({
    user: 'drake',
    password: 'drake',
    host:'localhost',
    port: 5433,
    database: 'daofab'
});

module.exports = pool;