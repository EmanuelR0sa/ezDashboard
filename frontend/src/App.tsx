import Root from "./routes/root";
import Sidbar from "./components/Sidbar";


function App() {
  return (
    <div className="text-3xl flex  bg-gray-100">
      <Sidbar />

      <Root />
    </div>
  );
}

export default App;
