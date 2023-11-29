const express = require('express');

const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql');

const executeQuery = (sql, callback) => {
    return new Promise((resolve, _) => {
        const connection = mysql.createConnection(config);
        connection.query(sql, (_, result) => resolve(callback(result)));
        connection.end();
    });
};

const sqlCreateTable = `CREATE TABLE IF NOT EXISTS people (id int NOT NULL AUTO_INCREMENT, name VARCHAR(255), PRIMARY KEY (id))`;

executeQuery(sqlCreateTable, () => true);

const all = () => {
    return executeQuery(`SELECT * FROM people`, (result) => result.map((row) => row.name));
};

const countItems = () => {
    return executeQuery(
        `SELECT COUNT(1) amountItems FROM people`,
        (result) => result[0].amountItems
    );
}

const save = async () => {
    const amountItems = await countItems();
    return executeQuery(
        `INSERT INTO people(name) values('Jeff ${amountItems + 1}')`,
        (result) => true
    );
};

app.get('/', async (req, res) => {
    await save();
    const results = await all();
    let names = "<ul>"
    results.forEach((name) => names += `<li>${name} </li>`);
    names += "</ul>";

    res.send(`<h1>Full Cycle Rocks!</h1> <br> ${names}`);
});

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
});