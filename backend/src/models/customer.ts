import mongoose from "mongoose";

const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;

const customerSchema= new Schema({

    firstName: {type: String, required: true},
    lastName:  {type: String},
    address:  {type: String},
    phone:  {type: Number},
    email:  {type: String, required: true},
    entryDate:{ type:Date, default:Date.now}

})

const CustomerModel= mongoose.model("CustomerModel", customerSchema, "customers");
export default CustomerModel;