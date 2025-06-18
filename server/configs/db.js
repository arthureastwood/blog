import mongoose from 'mongoose';

const connectDB = async () => {
    try{
        mongoose.connection.on('connected', ()=>console.log('Database connected successfully'));
        await mongoose.connect(`${process.env.MONGODB_URI}/blog`)
    }
    catch(error){
        console.log(error.message);
    }
}

export default connectDB;
// This code sets up a connection to a MongoDB database using Mongoose.
// It defines an asynchronous function `connectDB` that attempts to connect to the database using the URI specified in the environment variable `MONGODB_URI`.
// If the connection is successful, it logs a success message to the console.
// If there is an error during the connection attempt, it catches the error and logs the error message to the console.
// The connection is established to a specific database named `my-blog`.                