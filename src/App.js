import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Home from './components/Home'
import Photos from './components/photos/photos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
    </Router>
  );
}

export default App;
