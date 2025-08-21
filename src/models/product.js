const pool = require('./mysql');

const store = async (name) =>{
    const sql = 'INSERT INTO productos (name) VALUES (?)'

    try{
        const [result] = await pool.query(sql, [name]);
        return result
    } catch (error) {
        throw error;
    }
}