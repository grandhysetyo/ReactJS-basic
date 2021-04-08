import React from 'react';
import Content from './component/Content.js';

import Navbar from './component/Navbar.js'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Content page="Props and State"/>
      <h2>Hello, World!!</h2>
    </div>
  );
}

export default App;
