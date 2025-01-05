import Swal from "sweetalert2";
import "./App.css";
import { toast, Toaster } from "sonner";

function App() {
  const openNormalAlert = () => {
    alert("Hello, World!");
  };

  const openSweetAlert = () => {
    // alert("Hello, World!");
    Swal.fire("Hello World", "", "success");
  };

  return (
    <main>
      <Toaster richColors position="top-right" />
      <h1 className="text-4xl font-bold text-center">React</h1>
      <h1
        className="text-2xl font-bold text-center cursor-pointer p-2 rounded border-black border hover:text-white hover:bg-black mx-auto w-40 my-4"
        onClick={openNormalAlert}
      >
        ALert
      </h1>
      <h1
        className="text-2xl font-bold text-center cursor-pointer p-2 rounded border-black border hover:text-white hover:bg-black mx-auto w-40 my-4"
        onClick={openSweetAlert}
      >
        SweetALert
      </h1>
      <h1
        className="text-2xl font-bold text-center cursor-pointer p-2 rounded border-black border hover:text-white hover:bg-black mx-auto w-40 my-4"
        onClick={() => {
          toast.error("We got it!");
        }}
      >
        Toaster
      </h1>
    </main>
  );
}

export default App;
