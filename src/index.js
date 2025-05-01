import { app } from "./app.js";
import connectDB from "./db/conn.js";
import dotenv from "dotenv";

dotenv.config({
    path: './.env'
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server is listening at port : ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("MongoDB Connection Failed");
    })