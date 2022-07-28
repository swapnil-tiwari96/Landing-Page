import Cards from "./components/Cards";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

function App()
{
  return (
    <div>
      <Navbar />
      <Hero />
      <Dashboard />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
