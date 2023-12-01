const express = require('express')
const cors = require('cors')



class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios' ;

        // Middlewares ( SIempre se ejecuta anrtes de laznar el servidor)
        this.middlewares();
        // Rutas aplicacion

        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use(cors());

        // lectura y parseo del body
        this.app.use( express.json() );

        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'));
          
    }

    listen() {     
        this.app.listen(this.port, () => 
        console.log('servidor corriendo en puerto', this.port
        ));
    }

}


module.exports = Server;