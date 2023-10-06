/*
Rutas de Usuarios / Auth
host + api/auth
*/

const {Router} = require('express');
// Es el middelware que valida un campo en particular 
const { check } = require('express-validator');
const {validarCampos} = require('../middlewares/validar-campos');
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken} = require('../controllers/auth');

// ruta de registro
router.post('/new', 
    [ //Middelwares
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
    validarCampos
    ],
    crearUsuario
);

// Ruta del login
router.post('/', 
    [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 6 }),
    validarCampos
    ], 
    loginUsuario
);

// ruta del token, genera jsonWebToken
router.get('/renew', revalidarToken);

module.exports = router;