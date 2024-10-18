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


app.get('/customers', async(req: Request, res: Response)=>{
    try {
        const customers= await Customer.find();
        res.json(customers);
    } catch (error) {
        res.status(500).json({message: 'Error fetching customers', error});
    }
});

// GET a single customer by ID
app.get('/customers/:id', async(req: Request, res: Response)=>{
    try {
        const customer= await Customer.findById(req.params.id);
        if(!customer){
            return res.status(404).json({message: 'Customer not found'});
        }
        res.json(customer);
    } catch (error) {
        res.status(500).json({message: 'Error fetching customer', error});
    }
})



app.post("/customer", async(req: Request, res: Response) => {
    const {firstName, lastName, company, address, phone, email}= req.body
    const customerData={firstName: firstName, lastName: lastName, company: company, address: address, phone: phone, email: email}
    try {
        const newCustomer= new Customer(customerData);
        const saveCustomer= await newCustomer.save();
        res.status(201).json(saveCustomer);
    } catch (error) {
        res.status(400).json({message: 'Error creating customer', error});
    }
    
});



mongoose.connect(process.env.MONGO_URL!).then(()=>{
    console.log(`listening on port ${PORT}`)
        app.listen(PORT);
});
