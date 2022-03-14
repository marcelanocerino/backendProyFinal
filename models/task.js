const {db} = require('../controllers/database.controller')
// para hacer el get a task/:id
module.exports.getTask = async (id) => {
    const data = await db(`SELECT * FROM TASK WHERE id = ${id}`)
    console.log(data)
    return {
        tarea : data[0]
    }  
}
//para hacer el post a task/new
module.exports.createTask = async(titulo, cuerpo, prioridad, fechaCreacion, fechaActualizacion) => {
    const data = await db(`INSERT INTO TASK (titulo, cuerpo, prioridad, fechaCreacion, fechaActualizacion) VALUES ("${titulo}", "${cuerpo}", ${prioridad}, ${fechaCreacion}, ${fechaActualizacion})`)

    return {
        message: `Tarea creada con id ${data.id}`
    }
}

//para hacer el put a task/update/:id
module.exports.updateTask = async(id, titulo, cuerpo, prioridad, fechaCreacion, fechaActualizacion) => {
    const data = await db(`UPDATE TASK SET titulo = "${titulo}", cuerpo = "${cuerpo}", prioridad = ${prioridad}, fechaCreacion = ${fechaCreacion}, fechaActualizacion = ${fechaActualizacion} WHERE id = ${id}`)
    return {
        message: `Tarea actualizada con id ${data.id}`
    }
}

//para hacer el delete a task/delete/:id
module.exports.deleteTask = async (id) => {
    const data = await db(`DELETE FROM TASK WHERE id = ${id}`)
    return {
        message: `Tarea eliminada con id ${data.id}`
    }  
}