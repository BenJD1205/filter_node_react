const mongoose = require('mongoose')

const connString = process.env.DATABASE_CONNECTION

const connectDB = async () => {
    try{
        await mongoose.connect(connString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connect DB Success')
    }catch(err){
        console.log('Connect DB Fail')
        console.log(err)
        process.exit(1);
    }
}

module.exports = connectDB;