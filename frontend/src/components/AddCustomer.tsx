
export default function AddCustomer() {
  return (
    <div className="p-12">
    <form action="" className="text-xl font-normal flex flex-col">
<div className="flex flex-col"> 
<label htmlFor="firstName">First name </label>
<input type="text" id="firstName" name="firstName" placeholder="first name" className="px-2" />
</div>
<div className="flex flex-col pt-2"> 
<label htmlFor="LastName">Last name </label>
<input type="text" id="lastName" name="LastName" placeholder="last name" className="px-2" />
</div>

<div className="flex flex-col pt-2"> 
<label htmlFor="address">Address </label>
<input type="text"  id="address" name="address" placeholder="customer address" className="px-2"/>
</div>
<div className="flex flex-col pt-2"> 
<label htmlFor="phone">Phone number</label>
<input type="number"  id="phone" name="phone" placeholder="phone number" className="px-2"/>
</div>
<div className="flex flex-col pt-2"> 
<label htmlFor="email">Email</label>
<input type="email"  id="email" name="email" placeholder="customer email" className="px-2"/>
</div>
<div className="flex flex-col pt-2"> 
<label htmlFor="logo">Add logo</label>
<input type="email"  id="logo" name="logo" placeholder="customer email" className="px-2"/>
</div>


    </form>
    </div>
  )
}
