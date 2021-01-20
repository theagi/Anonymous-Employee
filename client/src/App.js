import React from 'react';
import Home from './Pages/Home';
import Navbar from './UI/Navbar';
import Toggle from './UI/ToggleSD';

function App() {
  return (
    <div className="App"> 
      <Navbar />
      <Toggle />
      <Home />
    </div>
  );
}

export default App;
