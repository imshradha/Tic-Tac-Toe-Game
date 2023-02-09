import mongoose from 'mongoose';

const connection = async (username,password) => {
    const URL = `mongodb+srv://${username}:${password}@userlogin.rsutksh.mongodb.net/tictactoe-db`;
    try{
       await mongoose.connect(URL,{ useUnifiedTopology: true, useNewUrlParser: true} )
       console.log("MongoDB Connected Successfully...")
    }catch(error){
        console.log("Error while comnecting with the database", error)
    }
}

export default connection;

//mongodb+srv://user:12345@userlogin.rsutksh.mongodb.net/tictactoe-DB
