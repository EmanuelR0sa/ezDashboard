import { Link } from "react-router-dom";

export default function CustomerNav() {
  return (
    <div className="flex pt-12">
<Link to="/customers/customerslist"> <div className="text-xl font-normal px-10 text-center rounded-t-xl hover:bg-neutral-200 "> Customer List </div></Link>
<Link to="/customers/addcustomer"> <div className="text-xl font-normal px-10 text-center rounded-t-xl hover:bg-neutral-200 "> Add Customer </div> </Link>

    </div>
  )
}
