import './App.css';
import AddOrder from './components/AddOrder.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/add" element={<AddOrder/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
