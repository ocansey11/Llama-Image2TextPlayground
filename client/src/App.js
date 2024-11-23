import React, { useState } from 'react';
import './App.css';
import ImageUpload from './components/ImageUpload';
import ImageDisplay from './components/ImageDisplay';
import DataTable from './components/DataTable';

function App() {
  const [image, setImage] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Image Upload and Display</h1>
      </header>
      <ImageUpload setImage={setImage} />
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <ImageDisplay image={image} />
        <DataTable />
      </div>
    </div>
  );
}

export default App;
