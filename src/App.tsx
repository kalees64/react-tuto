import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import ManagerLayout from "./components/ManagerLayout";
import Dashboard from "./components/Dashboard";
import EmployeeLayout from "./components/EmployeeLayout";

function App() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-center pt-3">React Layout</h1>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route path="/manager" element={<ManagerLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>

          <Route path="/employee" element={<EmployeeLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </div>
    </main>
  );
}

export default App;
