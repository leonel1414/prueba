const path = require('path');
const sqlite = require('sqlite3');

const db = new sqlite.Database(
    path.resolve(__dirname,'../../db.sqlite'),
    (error) =>{
        if (error){
            return console.error(error);
        }

        const sql = `CREATE TABLE IF NOT EXISTS categorias(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(100) NOT NULL
        )`;
        db.run(sql,(err) =>{
            if(err){
                return console.error(err);
            }
        });
    }
);

module.exports = db;
