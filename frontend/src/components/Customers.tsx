import { Outlet } from "react-router-dom";
import CustomerNav from "./CustomerNav";

export default function Customers() {
  return <div>
    <CustomerNav/>
    <Outlet />
    </div>
  
}
