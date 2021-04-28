import React from 'react';
import Content from './component/Content.js';
import Lifecycle from './component/Lifecycle.js';
import LoopES6 from './component/LoopES6.js';
import Navbar from './component/Navbar.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <LoopES6 />
      <Content page="Props and State"/>  
      <Lifecycle page="This is props"/>    
    </div>
  );
}

export default App;
