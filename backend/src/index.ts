import { config } from "dotenv";
config();
import express, { Request, Response} from 'express'
import mongoose, { Types } from 'mongoose';
import Customer from "./models/customer"
import cors from "cors"



const PORT= 5000

const app = express();

app.use(cors({
    origin: "*"
}));
app.use(express.json());



app.post("/customer", async(req: Request, res: Response) => {
    const {firstName, lastName, company, address, phone, email}= req.body
    const customerData={firstName: firstName, lastName: lastName, company: company, address: address, phone: phone, email: email}
    const newCustomer= new Customer(customerData);
    const saveCustomer= await newCustomer.save();
    res.json(saveCustomer);
    res.end();
});



mongoose.connect(process.env.MONGO_URL!).then(()=>{
    console.log(`listening on port ${PORT}`)
        app.listen(PORT);
});
