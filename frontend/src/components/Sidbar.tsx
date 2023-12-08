import { Link } from "react-router-dom";
import { FiMonitor } from "react-icons/fi";
export default function Sidbar() {
  return (
    <div className="w-56 h-screen bg-slate-200">
      <div className="flex justify-center">
        <div className=" flex flex-col text-base mt-28">
          <Link to="/dashboard" className="flex items-center"> <div className="text-xl pr-3"><FiMonitor/></div>  Dashboard</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/income">Income</Link>
          <Link to="/expenses">Expenses</Link>
          <Link to="/settings">Settings</Link>
        </div>
      </div>
    </div>
  );
}
