/*const db = require('../models/sqlite');

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

const findById = (id, callback) =>{

    const sql = `SELECT * FROM categorias WHERE id = ?`;

    db.get(sql, [id],(error,row)=> {

        if(error){
            return callback(error);
        }
        callback(null, row);
    });
}

const update = (id,name,callback) =>{

    const sql = `UPDATE categorias SET name = ? WHERE id = ?`;

    db.run(sql, [name,id], function(error){

        if(error){
            return callback(error);
        }
        callback(null, this.changes);
    });
}

const destroy = (id, callback) =>{

    const sql = `DELETE FROM categorias WHERE id = ?`;

    db.run(sql, [id], function (error){

        if(error){
            return callback(error);
        }
        callback(null, this.changes);
    });
}

/*module.exports = {
    create,
    findAll,
    findById,
    update,
    destroy
};
*/



//Sequelize
const {DataTypes} = require('sequelize');
const sequelize = require('./sequelize');



const Category = sequelize.define('category',{
    name:{
        type: DataTypes.STRING,
        allowNull: false
    }
});

//26:12



module.exports = Category;