const db = require('../models/sqlite');

const create = (name, callback) =>{

    const sql = `INSERT INTO categorias (name) VALUES (?)`;

    db.run(sql, [name], function (error){

        if(error){
            return callback(error);
        }
        callback(null,this.lastID);
    });
}

const findAll = (callback) =>{

    const sql = `SELECT * FROM categorias`;

    db.all(sql,(error,rows) => {

        if(error){
            return callback(error);
        }
        callback(null, rows);
    });

};

module.exports = {
    create,
    findAll
};