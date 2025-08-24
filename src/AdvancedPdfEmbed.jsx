import React, { useEffect, useRef } from 'react';

const AdvancedPdfEmbed = ({ 
  src, 
  width = "100%", 
  height = "600px", 
  className = "",
  zoom = 100,
  fitType = "FitH",
  backgroundColor = "#ffffff"
}) => {
  const containerRef = useRef(null);

  const embedStyle = {
    width: width,
    height: height,
    border: 'none',
    outline: 'none',
    margin: 0,
    padding: 0,
    display: 'block'
  };

  const containerStyle = {
    margin: 0, 
    padding: 0,
    backgroundColor: backgroundColor,
    position: 'relative',
    overflow: 'hidden'
  };

  // Build the PDF URL with parameters
  const buildPdfUrl = (baseUrl) => {
    const params = [
      'toolbar=0',
      'navpanes=0',
      'scrollbar=0', 
      'statusbar=0',
      'messages=0'
    ];

    if (zoom !== 100) {
      params.push(`zoom=${zoom}`);
    } else if (fitType) {
      params.push(`view=${fitType}`);
    }

    return `${baseUrl}#${params.join('&')}`;
  };

  // Apply background styling after component mounts
  useEffect(() => {
    if (containerRef.current) {
      const style = document.createElement('style');
      style.textContent = `
        .pdf-container-${Date.now()} object,
        .pdf-container-${Date.now()} embed,
        .pdf-container-${Date.now()} iframe {
          background: ${backgroundColor} !important;
        }
      `;
      document.head.appendChild(style);
      
      return () => {
        document.head.removeChild(style);
      };
    }
  }, [backgroundColor]);

  const pdfUrl = buildPdfUrl(src);
  const uniqueClass = `pdf-container-${Date.now()}`;

  return (
    <div 
      ref={containerRef}
      className={`pdf-embed-container ${className} ${uniqueClass}`} 
      style={containerStyle}
    >
      <object
        data={pdfUrl}
        type="application/pdf"
        style={embedStyle}
      >
        <embed
          src={pdfUrl}
          type="application/pdf"
          style={embedStyle}
        />
        
        <iframe
          src={pdfUrl}
          style={embedStyle}
          title="PDF Document"
        />
      </object>
    </div>
  );
};

export default AdvancedPdfEmbed;