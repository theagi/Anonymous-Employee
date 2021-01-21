import React,{useState} from 'react';
import Home from './Pages/Home/Home';
import Navbar from './UI/Navbar/Navbar';
import Toggle from './UI/ToggleSD/ToggleSD';
import SideDrawer from './UI/Sidedrawer/Sidedrawer';

function App() {
const [navStatus,update] = useState(false);

const toggleNav = () =>{
  update(prev => !prev);
}

  return (
    <div className="App"> 
      {/* <Navbar /> */}
      <Toggle toggle = {toggleNav}/>
      <SideDrawer status = {navStatus} toggle = {toggleNav} />
      <Home />
    </div>
  );
}

export default App;
