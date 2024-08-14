import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import InnerContent from "../components/InnerContent";
import Income from "../pages/income/Income";
import Projects from "../pages/projects/Projects";
import Expenses from "../pages/expenses/Expenses";
import Settings from "../pages/settings/Settings";
import Customers from "../pages/customers/Customers";
import CustomersList from  "../pages/customers/CustomersList";
import AddCustomers from "../pages/customers/AddCustomer";

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
