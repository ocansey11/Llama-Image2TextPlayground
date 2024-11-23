
import React from 'react';

function ImageDisplay({ image }) {
  return (
    <div>
      {image && <img src={image} alt="Uploaded" style={{ maxWidth: '300px' }} />}
    </div>
  );
}

export default ImageDisplay;