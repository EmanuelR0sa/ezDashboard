import { Outlet } from "react-router-dom";

export default function InnerContent() {
  return (
    <div className=" bg-gray-200 w-screen">
      <Outlet />
    </div>
  );
}
