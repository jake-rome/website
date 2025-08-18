import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import OtherPage from './OtherPage';
import AboutMe from './AboutMe';

import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/other" element={<OtherPage />} />
        <Route path="/AboutMe" element={<AboutMe />}/>
      </Routes>
  );
}

export default App;
