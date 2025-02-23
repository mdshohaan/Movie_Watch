import Navbar from "./Navbar";
import Register from "./Register";

function App() {
  return (
    <div className="flex flex-col items-center gap-10 m-3">
      <Navbar />
      <Register />
    </div>
  );
}

export default App;
