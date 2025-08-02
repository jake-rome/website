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



function HomePage() {
  const navigate = useNavigate();
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  const handleClick = () => {
    navigate('/other'); // 👈 this is the path from <Route path="/other" ... />
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
  const handleLinkedinRedirect = () => {
    window.open('www.linkedin.com/in/jake-rome-b36266267', '_blank');
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

      <div className="GapPanel">
      </div>

      {/* Center content */}
      <div className="MainContent">
        
      <div className='ContentWrapper'>
        <AnimatedContent
          distance={200}
          direction="vertical"
          reverse={true}
          duration={1.2}
          ease="bounce.out"
          initialOpacity={0.5}
          animateOpacity
          scale={1}
          threshold={0.2}
          delay={0.3}
        >
          <div className= "MainImageContainter" onClick={handleClick} >
        </div>
        </AnimatedContent>
        
        <span className='HiLine'>
          Hi I'm Jake
        </span>
        <motion.div>
          <span className="StaticIntroText">
            and I'm&nbsp;
            <span className="RotatingWordWrapper" layout>
            <RotatingText
              texts={['Determined','Innovative', 'Curious', 'Proactive', 'Driven', 'Personable', 'Motivated', 'Positive', 'Versatile']}
              mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 20, stiffness: 400 }}
              rotationInterval={4000}
            />
          </span>
          </span>
        </motion.div>

        <div className='MailBox' onClick={() => copyToClipboard('jrome8602@gmail.com')}></div>
        <div className='LinkedInBox' onClick={() => handleLinkedinRedirect()}></div>
        <div className='PhoneBox' onClick={() => copyToClipboard('6514479428')}></div>
        
        <StarBorder
          as='f'
          className="ViewMyWork"
          color="cyan"
          speed="4s"
          thickness={2}
        >
          View My Work
        </StarBorder>
        <StarBorder
          as='f'
          className="DownloadMyResume"
          color="cyan"
          speed="4s"
          thickness={2}
        >
          Download My Resume
        </StarBorder>
        

      </div>
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
          {/* Notification */}
      <div 
        className={`copy-notification ${notification.show ? 'show' : 'hide'}`}
      >
        {notification.message}
      </div>
    </div>
  );
}

export default HomePage;