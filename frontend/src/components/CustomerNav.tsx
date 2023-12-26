import { Link, useLocation } from "react-router-dom";

export default function CustomerNav() {

  const location = useLocation();
  return (
    <div className="customer-nav flex pt-12 mx-2">
<Link to="/customers/customerslist" className={location.pathname==='/customers/customerslist'?'customer-active':""}> Customer List</Link>
<Link to="/customers/addcustomer" className={location.pathname==='/customers/addcustomer'?'customer-active':""}> Add Customer </Link>
    </div>
  )
}
