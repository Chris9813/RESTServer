const Rol = require('../models/role');
const Usuario = require('../models/usuario');

const esRolValido = async ( rol = '' ) => {
    const existRol = await Rol.findOne({ rol });

    if(!existRol){
      throw new Error(`El rol ${rol} no esta registado en DB`);
    }

}

const emailExiste = async (correo = '') => {
    const existeEmail = await Usuario.findOne({ correo });
    if( existeEmail ){
      throw new Error('El correo ya esta registrado');

    }
}


const usuarioExistePorId = async ( id ) => {
  const existeUsuario = await Usuario.findById(id);
  if( !existeUsuario ){
    throw new Error(`el id ${id} no existe`);

  }
}

module.exports = { esRolValido, emailExiste, usuarioExistePorId }
