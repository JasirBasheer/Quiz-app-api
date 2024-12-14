import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from "./routers/router";
import cors from "cors"

dotenv.config();
const app = express()

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(cors())
app.use("/", router);

let PORT = process.env.PORT || 3001
let URI = process.env.MONGO_DB || "mongodb://localhost:27017/mydatabase"

mongoose.connect(URI)
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.log(err))


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})