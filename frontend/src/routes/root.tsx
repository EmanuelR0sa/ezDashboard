import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import InnerContent from "../components/InnerContent";
import Income from "../components/Income";
import Projects from "../components/Projects";
import Expenses from "../components/Expenses";
import Settings from "../components/Settings";
import Customers from "../components/Customers";
import CustomersList from  "../components/CustomersList";
import AddCustomers from "../components/AddCustomer";

export default function Root() {
  return (
    <Routes>
      <Route path="/" element={<InnerContent />}>
        <Route path="/" element={<Navigate replace to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="customers" element={<Customers />}>
        <Route path="/customers" element={<Navigate replace to="customerslist" />} />
        <Route path="customerslist" element={<CustomersList/>} />
        <Route path="addcustomer" element={<AddCustomers/>} />
        </Route>
        <Route path="projects" element={<Projects />} />
        <Route path="income" element={<Income />} />
        <Route path="expenses" element={<Expenses />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}
