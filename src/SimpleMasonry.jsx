import React from 'react';

const SimpleMasonry = ({ 
  items = [], 
  columns = 4, 
  gap = 1,
  className = "" 
}) => {
  
  // Sample data for demo - now with column assignments
  const sampleItems = [
    { id: 1, type: 'image', src: 'https://picsum.photos/300/400?random=1', alt: 'Sample 1', column: 1 },
    { id: 2, type: 'text', content: 'Text Box A', title: 'Text A Box Title', column: 1 },
    { id: 3, type: 'image', src: 'https://picsum.photos/300/600?random=2', alt: 'Sample 2', column: 2 },
    { id: 4, type: 'text', content: 'Text Box B', title: 'Text B Box Title', column: 2 },
    { id: 5, type: 'text', content: 'Text Box C', title: 'Text C Box Title', column: 2 },
    { id: 6, type: 'image', src: 'https://picsum.photos/300/300?random=3', alt: 'Sample 3', column: 3 },
    { id: 7, type: 'text', content: 'Text Box C', title: 'Text C Box Title', column: 3 },
    { id: 8, type: 'text', content: 'Text Box C', title: 'Text C Box Title', column: 3 },
    { id: 9, type: 'image', src: 'https://picsum.photos/300/500?random=4', alt: 'Sample 4', column: 4 },
    { id: 10, type: 'image', src: 'https://picsum.photos/300/450?random=5', alt: 'Sample 5', column: 1 }
  ];

  const itemsToRender = items.length > 0 ? items : sampleItems;

  // Group items by column
  const columnData = {};
  for (let i = 1; i <= columns; i++) {
    columnData[i] = [];
  }

  // Sort items into their respective columns
  itemsToRender.forEach(item => {
    const targetColumn = item.column || 1; // Default to column 1 if not specified
    if (targetColumn >= 1 && targetColumn <= columns) {
      columnData[targetColumn].push(item);
    }
  });

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gap: `${gap}vw`,
    padding: '2vw',
    backgroundColor: '#121016',
    minHeight: '100vh'
  };

  const columnStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: `${gap}vw`
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    borderRadius: '2vw',
    objectFit: 'cover'
  };

  const textBoxStyle = {
    backgroundColor: '#2d3136',
    padding: '1vw',
    borderRadius: '2vw',
    color: 'white',
    border: '0.15vw solid #444'
  };

  const handleItemClick = (item) => {
    if (item.onClick) {
      item.onClick(item);
    } else if (item.url) {
      window.open(item.url, '_blank');
    } else {
      console.log('Clicked item:', item);
    }
  };

  return (
    <div 
      className={`masonry-container ${className}`}
      style={containerStyle}
    >
      {/* Render each column */}
      {Array.from({ length: columns }, (_, columnIndex) => {
        const columnNumber = columnIndex + 1;
        const columnItems = columnData[columnNumber] || [];
        
        return (
          <div key={columnNumber} style={columnStyle}>
            {columnItems.map((item, itemIndex) => (
              <div
                key={item.id || `${columnNumber}-${itemIndex}`}
                onClick={() => handleItemClick(item)}
              >
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={item.alt || ''}
                    style={imageStyle}
                    loading="lazy"
                  />
                ) : (
                  <div style={textBoxStyle}>
                    {item.title1 && (
                      <h3 style={{ 
                        margin: '0.15vw 0.5vw 0.15vw 0.5vw', 
                        fontSize: '1vw',
                        lineHeight: '1.75',
                        fontWeight: 'bold'
                      }}>
                        {item.title1}
                      </h3>
                    )}
                    <p style={{ 
                      margin: 0, 
                      lineHeight: '1.5',
                      fontSize: '1vw'
                    }}>
                      {item.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};
export default SimpleMasonry;