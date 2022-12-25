import mongoose from "mongoose";

export const Connection = async (username,password) => {
    const URL = `mongodb+srv://${username}:${password}@flipkart-clone.swuvx8c.mongodb.net/?retryWrites=true&w=majority`;
  try {
   await mongoose.connect(URL,{useNewUrlParser:true});
   console.log('database is connected')
  } catch (error) {
    console.log('Error while connecting database ',error.message);
  }
};


export default Connection;