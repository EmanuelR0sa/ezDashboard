import { TFormSchema, formSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"




export default function AddCustomer() {
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting },
    reset,
    setError,

  } = useForm<TFormSchema>({
    resolver: zodResolver(formSchema)
  });


  const onSubmit= async (data: TFormSchema) => {
    //console.log(data);
    const response= await fetch("http://localhost:5000/customer",{
      method: "POST",
      body:JSON.stringify(data),
      headers:{
        "Content-Type": "application/json",
      },
    });
    const responseData= await response.json();
    if(!response.ok){
      alert("Submitting form failed!");
      return
    }

    if(responseData.errors){
      const errors= responseData.errors;
      if(errors.firstName){
        setError("firstName", {});
      }
    }
    reset();
  }

  return (
    <div className="bg-gray-50 mx-2 p-12 flex  justify-center items-center">
  
<form  onSubmit={handleSubmit(onSubmit)} className="text-base font-normal flex  flex-col w-96">
<div className="flex flex-col"> 
<label htmlFor="firstName">First name </label>
<input {...register("firstName")}
type="text" id="firstName" name="firstName" placeholder="first name" className="px-2 border rounded-md" />
{errors.firstName && (<p className="text-red-500">{`${errors.firstName.message}`}</p>)}
</div>
<div className="flex flex-col pt-2"> 
<label htmlFor="LastName">Last name </label>
<input {...register("lastName")} type="text" id="lastName" name="LastName" placeholder="last name" className="px-2 border rounded-md" />
</div>

<div className="flex flex-col pt-2"> 
<label htmlFor="address">Address </label>
<input {...register("address")} type="text"  id="address" name="address" placeholder="customer address" className="px-2 border rounded-md"/>
</div>
<div className="flex flex-col pt-2"> 
<label htmlFor="phone">Phone number</label>
<input {...register("phone")} type="number"  id="phone" name="phone" placeholder="phone number" className="px-2 border rounded-md"/>
</div>
<div className="flex flex-col pt-2"> 
<label htmlFor="email">Email</label>
<input {...register("email")} type="email"  id="email" name="email" placeholder="customer email" className="px-2 border rounded-md"/>
{errors.email && (<p className="text-red-500">{`${errors.email.message}`}</p>)}
</div>
<div className="flex flex-col pt-4"> 
<button disabled={isSubmitting} type="submit" className="bg-blue-700 disabled:bg-gray-500 hover:bg-blue-950 text-white cursor-pointer rounded-md"> Submit </button>
</div>
</form>
</div>
  )
}
