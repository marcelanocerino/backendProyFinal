const {db} = require('../controllers/database.controller')
// para hacer el get a list/:idList/tasks dudas: no entiendo como emparejar los datos de las tablas con los pk en la vista.
module.exports.getTasksFromList = async (idList) => {
    const data = await db(`SELECT idTask FROM LIST-TASK WHERE idList = ${idList}`)
    console.log(data)
    const taskData = {};
    data.forEach((idList) => {
        taskData.push(this.getTasks(idList))
    });
    return {
        list: taskData
    }
} 

//para hacer el post a list/new
module.exports.createList = async(titulo) => {
    const data = await db(`INSERT INTO LIST (titulo) VALUES ("${titulo}")`)
//hacer lista con tablero
    return {
        message: `Lista creada con id ${data.id}`
    }
}

//para hacer el put a list/update/:id
module.exports.updateList = async(id, titulo) => {
    const data = await db(`UPDATE LIST SET titulo = "${titulo}" WHERE id = ${id}`)
    return {
        message: `Lista actualizada con id ${data.id}`
    }
}

//para hacer el delete a list/delete/:id
module.exports.deleteList = async (id) => {
    const data = await db(`DELETE FROM LIST WHERE id = ${id}`)
    
    return {
        message: `Lista eliminada con id ${data.id}`
    }  
}