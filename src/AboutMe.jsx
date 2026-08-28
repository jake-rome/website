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
import Masonry from './Masonry';
import './AboutMe.css'
import SimpleMasonry from './SimpleMasonry';
import HomeButton from './HomeButton';

const items = [
  { 
    type: 'text', 
    title1: 'I am from St. Paul, Minnesota. I went to Woodbury high school where I played hockey and lacrosse and participated in robotics.',
    column: 1
  },
  { 
    type: 'image', 
    src: 'hockey.jpg', 
    column: 3
  },
  { 
    type: 'image', 
    src: 'msaelev.jpg', 
    column: 1
  },
  { 
    type: 'text', 
    title1: 'In my free time, I like to ski, watch sports, take up new engineering projects, hang out with friends, and play videogames.',
    column: 3
  },
  { 
    type: 'image', 
    src: 'alvin.jpg', 
    column: 1
  }, 
  { 
    type: 'text', 
    title1: 'Now, I am a junior at Georgia Tech studying aerospace engineering. On campus, I am chief engineer of DRXC, conduct research for the NASA RAVEN project, and am invovled in greek life.',
    column: 1
  },
  { 
    type: 'image', 
    src: 'DBVF.jpg', 
    column: 1
  },
  { 
    type: 'image', 
    src: 'vikings.jpg', 
    column: 2
  },
  { 
    type: 'image', 
    src: 'belfast.jpg', 
    column: 2
  },
  { 
    type: 'image', 
    src: 'ski.jpg', 
    column: 3
  },
  { 
    type: 'image', 
    src: 'rpm.jpg', 
    column: 3
  },
  { 
    type: 'image', 
    src: 'gramps.jpg', 
    column: 2
  },
  { 
    type: 'image', 
    src: 'RAVEN.jpg', 
    column: 2
  },
  { 
    type: 'image', 
    src: 'Surfing.jpg', 
    column: 2
  },
  { 
    type: 'image', 
    src: 'lax.jpg', 
    column: 1
  },
  { 
    type: 'text', 
    title1: 'When I can, I like to leave my comfort zone and explore new areas and try new things.',
    column: 2
  },
  { 
    type: 'image', 
    src: 'hiking.jpg', 
    column: 3
  } ,
  { 
    type: 'image', 
    src: 'causeway.jpg', 
    column: 1
  } ,
  { 
    type: 'image', 
    src: 'Santana.jpg', 
    column: 2
  } ,
  { 
    type: 'image', 
    src: 'puzzleworks.jpg', 
    column: 1
  } ,
  { 
    type: 'image', 
    src: 'gabe.jpg', 
    column: 3
  } ,
  { 
    type: 'image', 
    src: 'Fishing.jpg', 
    column: 3
  } ,
  { 
    type: 'image', 
    src: 'castle.jpg', 
    column: 3
  }
];



function AboutMe() {
  const navigate = useNavigate();

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

  return (
    
     <div className="AppContainer">
      <HomeButton />
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
        <div className='TopTextLine'>About Me</div>
        <SimpleMasonry 
          className='SimpleMasonry'
          items={items}
          columns={3}  // number of columns
          gap={1}     // gap between items in pixels
        />
        

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