const pool = require('./mysql');

const store = async (name) =>{
    const sql = 'INSERT INTO products (name) VALUES (?)'

    try{
        const [result] = await pool.query(sql, [name]);
        
        return result;

    } catch (error) {

        throw error;
    }
}

const findAll = async () => {

    const sql = 'SELECT * FROM products';

    try {
        const [rows] = await pool.query(sql);
        return rows;

    } catch (error) {
        throw error;
    }
}


module.exports = {
    store,
    findAll
};