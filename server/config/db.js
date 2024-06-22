const mongoose=require("mongoose")

const connectDb=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('mongoDb connected')
    }
    catch(error){
        console.log(`mongo db error ${error}`)
    }
};

module.exports =connectDb;