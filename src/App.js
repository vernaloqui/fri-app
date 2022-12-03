import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import Features from './pages/Features';
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    
    <div className="App">
      <Navbar />
      {/* {component} */}
      <div>
        <Routes>
          <Route path="/fri-app/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/features" element={<Features/>}/>
          <Route path="/pricing" element={<Pricing/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
