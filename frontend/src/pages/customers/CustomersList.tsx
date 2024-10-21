import ProjectTable from "@/components/ui/ProjectTable";
import { useEffect, useState } from "react";

export type customerType = {
  _id: string;
  firstName: string;
  lastName?: string;
  company?: string;
  address?: string;
  phone?: string;
  email: string;
  entryDate?: Date;
};

export default function CustomersList() {
  const [customerData, setCustomerData]= useState<customerType[]>([]);
  const [loading, setLoading]= useState<boolean>(true);
  const [error, setError]= useState <string | null>(null);

  useEffect(()=>{
    const fetchCustomer= async () =>{
      try {
       const response= await fetch('http://localhost:5000/customers');
       if(!response.ok){
        throw new Error("Network Response was not ok");
       }
       const clientData: customerType[]= await response.json();

      setCustomerData(clientData);
    
      } catch (error:any) {
        setError(error.message)
      }finally{
        setLoading(false)
      }
    }

    fetchCustomer();
    
  },[]);


  if (loading) {
    return <div>Loading</div>
  }

  if (error) {
    return <div>{error} </div>
  }

  
  return (
    <div className="bg-gray-50 mx-2 mb-2 p-12 h-fit">
      
      <ProjectTable data={customerData}/>
    </div>
  )
}
