const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db');

var corsOptions = {
    origin: "http://localhost:4200"
};

app.use(cors(corsOptions));
app.use(express.json());


app.listen(5000, (req, res)  => {
    console.log('RUNNING');
})

//ROUTES//

app.get("/api/parentTransactions", getAllDataFromParents);

async function getAllDataFromParents (req , res) {
    try {
        const allParent = await pool.query("SELECT * FROM parent ORDER BY parentID");
        res.json(allParent.rows);
    } catch (error) {
        console.log(error);
    }
} 
