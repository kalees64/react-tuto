import { Outlet } from "react-router-dom";

const EmployeeLayout = () => {
  return (
    <div>
      EmployeeLayout
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default EmployeeLayout;
