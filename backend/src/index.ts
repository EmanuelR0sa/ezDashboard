import { config } from "dotenv";
config();
import express, {Request, Response} from 'express'
import mongoose from 'mongoose';
import customer from "./models/customer"

const PORT= 5000

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("gg");
});

app.get("/hello", (req: Request, res: Response)=> {
    res.send("hello world");
});

mongoose.connect(process.env.MONGO_URL!).then(()=>{
    console.log(`listening on port ${5000}`)
        app.listen(PORT);
});
