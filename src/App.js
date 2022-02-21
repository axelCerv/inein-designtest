import './App.css';
import Autos from './components/Autos';
import Brands from './components/Brands';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Ventajas from './components/Ventajas';


function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Hero />
      <Brands />
      <Ventajas />
      <Autos />
    </div>
  );
}

export default App;
