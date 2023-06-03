import mongoose from "mongoose";

const Connection = async (username,password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.jsq0l.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL,{useNewUrlParser:true});
        console.log('database is connected')
       } catch (error) {
        console.log('URL', URL)
         console.log('Error while connecting database ',error.message);
       }
};
     
     
export default Connection;