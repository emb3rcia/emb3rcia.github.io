import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import SoftwareProjects from './pages/SoftwareProjects.jsx';
import HardwareProjects from './pages/HardwareProjects.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Credits from './pages/Credits.jsx';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/software" element={<SoftwareProjects />} />
                <Route path="/hardware" element={<HardwareProjects />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/credits" element={<Credits />} />
            </Routes>
        </HashRouter>
    );
}

export default App;