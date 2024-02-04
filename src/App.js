import logo from './logo.svg';
import './App.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App bg-gray-50 w-[100vw] h-[100vh] overflow-x-hidden">
      <Navbar />
      <Cart />
    </div>
  );
}


export default App;
