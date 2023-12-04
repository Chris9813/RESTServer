const mongoose = require("mongoose");

const dbConnection = async () => {

    try {

        await mongoose.connect( process.env.MONGODB_CNN )

        console.log('base de datos online')
        
    } catch (error) {
        throw new Error('Error al inciar la base de datos', error)
    }

}



module.exports = {
    dbConnection
}