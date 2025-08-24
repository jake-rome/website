import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import OtherPage from './OtherPage';
import AboutMe from './AboutMe';
import UpperStory from './UpperStory';
import FIRST from './FIRST';
import Clock from './Clock';
import Website from './Website';
import Cube from './Cube';
import Tensile from './Tensile';
import LSPACE from './LSPACE';

import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/other" element={<OtherPage />} />
        <Route path="/project/UpperStory" element={<UpperStory />}/>
        <Route path="/project/FIRST" element={<FIRST />}/>
        <Route path="/project/Website" element={<Website />}/>
        <Route path="/project/Cube" element={<Cube />}/>
        <Route path="/project/LSPACE" element={<LSPACE />}/>
        <Route path="/project/Clock" element={<Clock />}/>
        <Route path="/project/Tensile" element={<Tensile />}/>
        <Route path="/AboutMe" element={<AboutMe />}/>
      </Routes>
  );
}

export default App;
