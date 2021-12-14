import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Carrousel from './components/Carrousel';
import MoviesApi from './components/MoviesApi';

function App() {
  return (
    <div>
      <Navbar />

      <Carrousel />

      <MoviesApi />

      <Footer />
    </div>
  );
}

export default App;
