
export default function AddCustomer() {
  return (
    <div className="bg-gray-50 mx-2 p-12 flex  justify-center items-center">
  
<form action="" className="text-base font-normal flex  flex-col w-96">
<div className="flex flex-col"> 
<label htmlFor="firstName">First name </label>
<input type="text" id="firstName" name="firstName" placeholder="first name" className="px-2 border rounded-md" />
</div>
<div className="flex flex-col pt-2"> 
<label htmlFor="LastName">Last name </label>
<input type="text" id="lastName" name="LastName" placeholder="last name" className="px-2 border rounded-md" />
</div>

<div className="flex flex-col pt-2"> 
<label htmlFor="address">Address </label>
<input type="text"  id="address" name="address" placeholder="customer address" className="px-2 border rounded-md"/>
</div>
<div className="flex flex-col pt-2"> 
<label htmlFor="phone">Phone number</label>
<input type="number"  id="phone" name="phone" placeholder="phone number" className="px-2 border rounded-md"/>
</div>
<div className="flex flex-col pt-2"> 
<label htmlFor="email">Email</label>
<input type="email"  id="email" name="email" placeholder="customer email" className="px-2 border rounded-md"/>
</div>
<div className="flex flex-col pt-4"> 
<input type="submit" className="bg-blue-700 hover:bg-blue-950 text-white cursor-pointer rounded-md"/>
</div>
</form>
</div>
  )
}
