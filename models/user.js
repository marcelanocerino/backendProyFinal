const {db} = require('../controllers/database.controller')

module.exports.getUserInfo = async (id) => {
    const data = await db(`SELECT * FROM USER WHERE id = ${id}`)
    console.log(data)
    return {
        user : data[0]
    }  
}

module.exports.createUser = async(nombre, apellido, usuario, contrasena) => {
    const data = await db(`INSERT INTO USER(nombre, apellido, usuario, contrasena) VALUES ("${nombre}", "${apellido}", ${usuario}, ${contrasena})`)

    return {
        message: `Usuario creado con id ${data.id}`
    }
}

module.exports.updateUser = async(id, nombre, apellido, usuario, contrasena) => {
    const data = await db(`UPDATE USER SET nombre = "${nombre}", apellido = "${apellido}", usuario = ${usuario}, contrasena = ${contrasena} WHERE id = ${id}`)
    return {
        message: `Usuario actualizado con id ${data.id}`
    }
}
//VER PUNTUALMENTE ESTO PORQUE ES UN USUARIO ADMINISTRADOR.
module.exports.updateToAdmin = async(id, nombre, apellido, usuario, contrasena) => {
    const data = await db(`UPDATE USER SET nombre = "${nombre}", apellido = "${apellido}", usuario = ${usuario}, contrasena = ${contrasena} WHERE id = ${id}`)
    return {
        message: `Usuario actualizado con id ${data.id}`
    }
}

