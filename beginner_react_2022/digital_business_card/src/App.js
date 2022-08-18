import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-700 w-screen h-full p-8">
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
