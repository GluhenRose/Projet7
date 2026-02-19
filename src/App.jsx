import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from "./pages/About";
import Error from "./pages/Error";
import Accommodation from "./pages/Accommodation";
import MainLayout from './layouts/MainLayout';
import './App.css';


 function App() {
  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  )
}


export default App