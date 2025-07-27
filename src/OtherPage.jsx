import { useNavigate } from 'react-router-dom';
import './App.css';
//import FuzzyText from './FuzzyText';
import Particles from './Particles';
import StarBorder from './StarBorder';

function HomePage() {
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
      <div className="MainContent pdf-wrapper">
        <embed
          src={"${process.env.PUBLIC_URL}/resume.pdf#toolbar=0&navpanes=0&scrollbar=0&zoom=120"}
          type="application/pdf"
          className="pdf-viewer"
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


export default HomePage;