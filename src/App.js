import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import OtherPage from './OtherPage';

import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/website" element={<HomePage />} />
        <Route path="/website/other" element={<OtherPage />} />
      </Routes>
    </Router>
  );
}

export default App;
