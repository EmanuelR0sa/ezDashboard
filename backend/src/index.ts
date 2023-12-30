import { config } from "dotenv";
config();
import express, {Request, Response} from 'express'
import mongoose from 'mongoose';
import Customer from "./models/customer"
import cors from "cors"

const PORT= 5000

const app = express();

app.use(cors({
    origin: "*"
}));
app.use(express.json());

app.post("/customer", async(req: Request, res: Response) => {
    const {firstName, lastName, address, phone, email}= req.body
    const customerData={firstName: firstName, lastName: lastName, address: address, phone: phone, email: email}
    const newCustomer= new Customer(customerData);
    const saveCustomer= await newCustomer.save();
    res.json(saveCustomer);
   /* if(saveCustomer){
        res.send("customer added successfully")
    }else{
        res.send("failed to create new customer")
    }*/
   
    res.end();

});

/*
app.post("/customer", async(req: Request, res: Response) => {
   // const { firstName, lastName, address, phone, email}= req.body
    const customerData={firstName: "Antonio", lastName: "Costa", address: "main street, lisbon", phone: "0000", email: "costa@mail.com"}
    const newCustomer= new Customer(customerData);
    const saveCustomer= await newCustomer.save();
    res.json(saveCustomer);
});

*/

mongoose.connect(process.env.MONGO_URL!).then(()=>{
    console.log(`listening on port ${PORT}`)
        app.listen(PORT);
});
