import { Link } from "react-router-dom";
import { FiMonitor } from "react-icons/fi";
import { FiLayers } from "react-icons/fi";
import { FiDollarSign } from "react-icons/fi";
import { FiTrendingDown } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";

export default function Sidbar() {
  return (
    <div className="sidebar bg-white">
      <h1 className="text-center mt-6 underline underline-offset-4">ArchiDash</h1>
      <div className="flex justify-center">
        <div className=" flex flex-col text-base mt-20">
          <Link to="dashboard" className="flex items-center py-2 px-10 rounded-xl hover:bg-neutral-200"> <div className="text-xl pr-2"><FiMonitor/></div>  Dashboard</Link>
          <Link to="customers" className="flex items-center py-2 px-10 rounded-xl hover:bg-neutral-200 "> <div className="text-xl pr-2"><FiUsers /></div> Customers</Link>
          <Link to="projects" className="flex items-center py-2 px-10 rounded-xl hover:bg-neutral-200 "> <div className="text-xl pr-2"><FiLayers /></div> Projects</Link>
          <Link to="income" className="flex items-center py-2 px-10 rounded-xl hover:bg-neutral-200 "><div className="text-xl pr-2" ><FiDollarSign /></div> Income</Link>
          <Link to="expenses" className="flex items-center py-2 px-10 rounded-xl hover:bg-neutral-200 "><div className="text-xl pr-2" ><FiTrendingDown /></div> Expenses</Link>
          <Link to="settings" className="flex items-center py-2 px-10 rounded-xl hover:bg-neutral-200  "><div className="text-xl pr-2"><FiSettings /></div>Settings</Link>
        </div>
      </div>
    </div>
  );
}
