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

app.get("/api/getParentPaidAmount", getAllParentPaidAmount);

async function getAllParentPaidAmount (req, res) {
    try {
        const allPaidParent = await pool.query("select * from parent P NATURAL JOIN (select parentid, SUM(paidAmount) as totalPaidAmount from child GROUP BY parentid) as C");
        res.json(allPaidParent.rows);
    } catch (error) {
        console.log(error);
    }
}

app.get("/api/childTransactions", getAllDataFromChild);

async function  getAllDataFromChild (req , res) {
    try {
        const allChild = await pool.query("SELECT * FROM child ORDER BY childID");
        res.json(allChild.rows);
    } catch (error) {
        console.log(error);
    }
}

app.get("/api/getChildSenderReceiver", getAllChildSenderReceiver);

async function getAllChildSenderReceiver (req, res) {
    try {
        console.log(req.query.query);
        const allChildSenderReceiver = await pool.query("select C.childid, P.sender, P.receiver, P.totalAmount, C.paidAmount from child C, parent P where C.parentid = P.parentid AND C.parentid = $1", [req.query.query]);
        res.json(allChildSenderReceiver.rows);
    } catch (error) {
        console.log(error);
    }
}