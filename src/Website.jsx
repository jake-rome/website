import { useNavigate } from 'react-router-dom';
import './App.css';
//import FuzzyText from './FuzzyText';
import Particles from './Particles';
import PDFEmbed from './PDFEmbed';


function Website() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/other'); // 👈 this is the path from <Route path="/other" ... />
  };

  return (
    <div className="AppContainer">
      {/* Left Panel with particles */}
      <div className="SidePanel">
        <Particles className='ParticlesContainer'
          particleColors={['#ffffff', '#ffffff']}
          particleCount={1000}
          particleSpread={10}
          speed={0.05}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="GapPanelOther">
      </div>

      {/* Center content */}
      <div className="MainContent">
        
      {/*RIGHT HERE */}
      <PDFEmbed 
          src="/Website.pdf" // Replace with your PDF path or URL
          width="100%"
          height="100vh"
        />

    </div>

      {/* Right Panel with particles */}
      <div className="SidePanel">
        <Particles className='ParticlesContainer'
          particleColors={['#ffffff', '#ffffff']}
          particleCount={1000}
          particleSpread={10}
          speed={0.05}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
    </div>
  );
}
export default Website;