import Swal from "sweetalert2";
import "./App.css";

function App() {
  const openAlert = () => {
    Swal.fire("Welcome to React", "", "success");
  };
  return (
    <main>
      <button onClick={openAlert}>Open Sweet Alert</button>
    </main>
  );
}

export default App;
