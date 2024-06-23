import './App.css';
import Login from './pages/Login';
import Header from './pages/Header';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Userblogs from './pages/Userblogs';

function App() {
  return (
    <div>
      <Header />

      <Toaster />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/myblogs" element={<Userblogs />} />
      </Routes>
    </div>
  );
}

export default App;
