import { useNavigate } from 'react-router-dom';
import './App.css';
//import FuzzyText from './FuzzyText';
import Particles from './Particles';
import AnimatedContent from './AnimatedContent';
import SplitText from "./SplitText";
import RotatingText from './RotatingText';
import { motion } from "framer-motion";
import Magnet from './Magnet';
import StarBorder from './StarBorder';
import React, { useState, useEffect } from 'react';
import DecryptedText from './DecryptedText';
import TiltedCard from './TiltedCard';



function HomePage() {
  const navigate = useNavigate();
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  const handleAboutMeClick = () => {
    navigate('/aboutme'); 
  };
  const [notification, setNotification] = useState({ 
    show: false, 
    message: '', 
    type: 'success' 
  });
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      showNotification('Copied ✅', 'success');
    } catch (err) {
    }
  };
  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification(prev => ({ ...prev, show: false }));
      }, 2000);
      
      return () => clearTimeout(timer); // Cleanup
    }
  }, [notification.show]);
  const showNotification = (message, type = 'success') => {
    setNotification({ show: true, message, type });
  };
  
  const scrollToElement = () => {
    const element = document.getElementById('target-element');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',  // Smooth scrolling animation
        block: 'start'       // Align to top of viewport
      });
    }
  };

  
  
  const handleProjectClick = (project) => {
    navigate(`/project/${project.id}`);
    // Or open a modal, show details, etc.
  };

  const handleResumeClick = () => {
    window.open(process.env.PUBLIC_URL + '/resume.pdf', '_blank')   
  }

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

      <div className="GapPanel">
      </div>

      {/* Center content */}
      <div className="MainContent">
        
    </div>
    <div className="GapPanel">
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

export default AboutMe;