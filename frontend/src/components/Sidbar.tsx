import { Link } from "react-router-dom";
export default function Sidbar() {
  return (
    <div className="w-56 h-screen bg-slate-200">
      <div className="flex justify-center">
        <div className=" flex flex-col text-base mt-28">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/income">Income</Link>
          <Link to="/expenses">Expenses</Link>
          <Link to="/settings">Settings</Link>
        </div>
      </div>
    </div>
  );
}
