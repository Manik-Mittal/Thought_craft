import './App.css';
import Login from './pages/Login';
import Header from './pages/Header';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
