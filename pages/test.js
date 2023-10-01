
import React, { useEffect, useState } from 'react';

const Image = () => {
  // const [validurl, setValidUrl] = useState([])
  const [images, setImages] = useState([
    'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=231899625623198',
    'https://i.ytimg.com/vi/hcpUkOTspOU/maxresdefault.jpg',
    'https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=231899625623198',
    'https://media.gettyimages.com/id/1469882992/photo/engineers-check-aerodynamics-of-electric-car.jpg?b=1&s=612x612&w=0&k=20&c=77RZoUEhMA0b5FgJVF5c2tJ0XckFE29GC60bqeJOhyI=',
  ])

  const handleImageError = (i) => {
    // Handle the error here, e.g., by logging it
    console.error('Image load error', i);
  };

 
console.log(validurl)
    
    return (
      <div>
        <h1>Valid Images</h1>
        <ul>
          {images?.map((imageUrl, index) => (
            <li key={index}>
              <img src={imageUrl} onError={() => handleImageError(index)} alt={`Image ${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
export default Image;
