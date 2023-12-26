import { Link, useLocation } from "react-router-dom";
import { FiMonitor } from "react-icons/fi";
import { FiLayers } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";
import { FiTrendingDown } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";

export default function Sidbar() {

  const location = useLocation();
  return (
    <div className="sidebar bg-white">
      <h1 className="text-center mt-6 underline underline-offset-4">ArchiDash</h1>
      <div className="flex justify-center">
        <div className=" flex flex-col text-base mt-20 mx-2">
          <Link to="dashboard" className={location.pathname ==='/dashboard'?'dashboard-active':""}> <div className="dashboard-nav ">  <div className="text-xl pr-2"><FiMonitor/></div>  Dashboard </div></Link>
          <Link to="customers" className={location.pathname.includes('/customers')?'dashboard-active':""}><div className="dashboard-nav ">  <div className="text-xl pr-2"><FiUsers /></div> Customers</div></Link>
          <Link to="projects" className={location.pathname ==='/projects'?'dashboard-active':""}><div className="dashboard-nav "><div className="text-xl pr-2"><FiLayers /></div> Projects</div></Link>
          <Link to="income" className={location.pathname ==='/income'?'dashboard-active':""}> <div className="dashboard-nav "><div className="text-xl pr-2" ><FiDollarSign /></div> Income</div></Link>
          <Link to="expenses" className={location.pathname ==='/expenses'?'dashboard-active':""}><div className="dashboard-nav "><div className="text-xl pr-2" ><FiTrendingDown /></div> Expenses</div></Link>
          <Link to="settings" className={location.pathname ==='/settings'?'dashboard-active':""}><div className="dashboard-nav "><div className="text-xl pr-2"><FiSettings /></div>Settings</div></Link>
        </div>
      </div>
    </div>
  );
}
