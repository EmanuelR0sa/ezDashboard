import { Outlet } from "react-router-dom";

export default function InnerContent() {
  return (
    <div className=" bg-gray-100">
      <Outlet />
    </div>
  );
}
