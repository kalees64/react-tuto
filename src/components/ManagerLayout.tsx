import { Outlet } from "react-router-dom";

const ManagerLayout = () => {
  return (
    <div>
      ManagerLayout
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ManagerLayout;
