import './App.css';
import Login from './pages/Login';
import Header from './pages/Header';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Userblogs from './pages/Userblogs';
import CreateBlog from './pages/CreateBlog';
import Blogs from './pages/Blogs';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Header />

      <Toaster />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/myblogs" element={<Userblogs />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
