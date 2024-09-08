import mongoose from "mongoose"

let isConneted = false; 

export const connectToDB = async () =>{
    mongoose.set('strictQuery', true)
    if (!process.env.MONGODB_URL) {
        return console.log("mongodb no encontrado")
        
    }
    if(isConneted){
        return console.log("conectado correctamente a mongodb")
        
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        isConneted = true
    } catch (error) {
        console.log(error)
    }
}