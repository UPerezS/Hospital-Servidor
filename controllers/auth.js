// Importar la libreria de express a este archivo para obtener la ayuda 
const {response} = require('express');

const User = require('models/User');


const crearUsuario = async(req, res = response) => {


    const { email, password} = req.body;

    try {

        let usuario = await User.findOne({email});
        console.log(usuario);

        if( usuario ){
            return res.status(400).json({
                ok:false,
                msg: 'Correo electronico ya existe'
            });
        }

        usuario = new User( req.body);

        await usuario.save();

        res.status(201).json({
            ok:true,
            uid: usuario.id,
            name: usuario.name
        })
    }catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'No se puede realizar el registro'
        })
    }
    
}

const loginUsuario = (req, res = response) => {

    const { email, password} = req.body;


    res.json({
        ok:true,
        msg:'login',
        email,
        password
    })
}

const revalidarToken = (req, res = response) => {
    res.json({
        ok:true,
        msg:'renew'
    })
}


module.exports = {
    crearUsuario,
    loginUsuario, 
    revalidarToken
}