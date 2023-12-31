const { response, request } = require('express')


const usuariosGet = (req = request, res = response) => {
    const {q , nombre, apiKey = 'No APIkey'} = req.query;
    res.json({
        msg: 'Get API - Controlador',
        q,
        nombre,
        apiKey,
    })
}

const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;
    res.json({
        msg: 'Post API - Controlador',
        nombre,
        edad
    })
}

const usuariosPut = (req, res = response) => {
    const { id } = req.params;
    res.json({
        msg: 'Put API - Controlador',
        id
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'Path API - Controlador'
    })
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'Delete API - Controlador'
    })
}



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}