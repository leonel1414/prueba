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

module.exports = {
    create
};