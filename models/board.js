const {db} = require('../controllers/database.controller')
// para hacer el get a board/:idUser dudas: no entiendo como emparejar los datos de las tablas con los pk en la vista.
module.exports.getBoardsFromUser = async (idUser) => {
    const data = await db(`SELECT idBoard FROM USER-BOARD WHERE idUser = ${idUser}`)
    console.log(data)//[1,2,3]
    const boardsData = {};
    data.forEach((idBoard) => {
        boardsData.push(this.getBoard(idBoard))
    });
    return {
        board: boardsData
    }
} 

//para hacer el get a board/:id
module.exports.getBoard = async (id) => {
    const data = await db(`SELECT * FROM BOARD WHERE id = ${id}`)
    console.log(data)
    return {
        board : data[0]
    }  
}
// como hacer el get para board/:idBoard/lists????
module.exports.getListFromBoard = async (idBoard) => {
    const data = await db(`SELECT idBoard FROM BOARD-LIST WHERE idList = ${idBoard}`)
    console.log(data)
    const listData = {};
    data.forEach((idBoard) => {
        listsData.push(this.getList(idBoard))
    });
    return {
        list: listData
    }
} 

//para hacer el post a board/new
module.exports.createBoard = async(titulo, autor) => {

    const data = await db(`INSERT INTO BOARD (titulo, autor) VALUES ("${titulo}", "${autor}")`)
db('insert user-board (idUser, idBoard) value ${autor}${data.id}')
    return {
        message: `Tablero creado con id ${data.id}`
    }
}

//para hacer el put a board/update/:id
module.exports.updateBoard = async(id, titulo, color) => {
    const data = await db(`UPDATE BOARD SET titulo = "${titulo}", color = ${color} WHERE id = ${id}`)
    return {
        message: `Tablero actualizado con id ${data.id}`
    }
}

//para hacer el delete a board/delete/:id
module.exports.deleteBoard = async (id) => {
    const data1 = await db (`DELETE FROM USER-BOARD WHERE idboard = ${id}`);
    const data = await db(`DELETE FROM BOARD WHERE id = ${id}`)
    return {
        message: `Tablero eliminado con id ${data.id}`
    }  
}