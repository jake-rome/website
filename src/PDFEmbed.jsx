import React, { useState, useEffect } from 'react';

const PdfEmbed = ({ 
  src, 
  width = "100%", 
  height = "600px", 
  className = "",
  zoomFunction = null,
  // Header props
  title = "",
  subtitle = "",
  description = "",
  showHeader = true,
  headerStyle = {},
  customHeader = null
}) => {
  const [zoom, setZoom] = useState(100);
  const [screenWidth, setScreenWidth] = useState(0);

  const embedStyle = {
    width: width,
    height: height,
    border: 'none',
    outline: 'none',
    margin: 0,
    padding: 0,
    display: 'block'
  };

  // Simple function to get screen width
  const getWidth = () => window.innerWidth;

  // Default zoom calculation based on width
  const defaultZoomCalculation = (w) => {
    if(w < 1440){
      return 100-((1440-w)/15)
    }else{
      return 100 + ((w-1440)/15)
    }

  };

  useEffect(() => {
    const updateZoom = () => {
      const w = getWidth();
      setScreenWidth(w);
      
      // Use custom zoom function if provided, otherwise use default
      const newZoom = zoomFunction ? zoomFunction(w) : defaultZoomCalculation(w);
      setZoom(newZoom);
    };

    // Set initial zoom
    updateZoom();

    // Add resize listener
    window.addEventListener('resize', updateZoom);
    
    return () => window.removeEventListener('resize', updateZoom);
  }, [zoomFunction]);

  // Build the PDF URL with parameters
  const buildPdfUrl = (baseUrl) => {
    const params = [
      'toolbar=0',
      'navpanes=0',
      'scrollbar=0', 
      'statusbar=0',
      'messages=0',
      `zoom=${zoom}`
    ];

    return `${baseUrl}#${params.join('&')}`;
  };

  const pdfUrl = buildPdfUrl(src);

  // Default header styles

  const titleStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '0 0 8px 0',
    color: '#333'
  };

  const subtitleStyle = {
    fontSize: '1.2rem',
    fontWeight: '500',
    margin: '0 0 12px 0',
    color: '#666'
  };

  const descriptionStyle = {
    fontSize: '1rem',
    margin: '0',
    color: '#777',
    maxWidth: '600px',
    margin: '0 auto'
  };

  return (
    <div className={`pdf-embed-container ${className}`} style={{ margin: 0, padding: 0 }}>
      {/* Header Section */}
      

      {/* PDF Embed */}
      <object
        data={pdfUrl}
        type="application/pdf"
        style={embedStyle}
        key={zoom}
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

export default PdfEmbed;