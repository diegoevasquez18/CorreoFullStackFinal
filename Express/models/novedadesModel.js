var pool = require('./bd');

async function getNovedades() {
    var query = "select * from servicios order by id";
    var rows = await pool.query(query);
    return rows;
}

async function insertarNovedad(obj) {
    try {
        var query = "insert into servicios set ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteNovedadById(id) {
    var query = "delete from servicios where id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getNovedadById(id) {
    var query = "select * from servicios where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function modificarNovedadById(obj, id) {
    try {
        var query = "update servicios set ? where id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { getNovedades, insertarNovedad, getNovedadById, modificarNovedadById, deleteNovedadById }