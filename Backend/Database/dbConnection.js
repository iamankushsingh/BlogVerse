import mongoose from 'mongoose';

export const dbConnection=()=>{
    mongoose.connect(process.env.MONGO_URI,{ dbName: "BLOG_APP",})
        .then(()=>{
            console.log("Database connection succesful")
        })
        .catch((err)=>{
            console.log(`Database Connection Problem: ${err}`)
        })
}