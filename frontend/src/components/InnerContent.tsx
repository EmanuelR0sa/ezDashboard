import { Outlet } from "react-router-dom";

export default function InnerContent() {
  return (
    <div className="inner-Content">
      Inner content
      <Outlet />
    </div>
  );
}
