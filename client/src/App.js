import React,{useState} from 'react';
import {Route,Switch} from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './UI/Navbar/Navbar';
import Toggle from './UI/ToggleSD/ToggleSD';
import SideDrawer from './UI/Sidedrawer/Sidedrawer';
import Signup from './Pages/SignUp/SignUp';


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
      
      <Switch>
        <Route exact path = '/'>
          <Home />
        </Route>

        <Route exact path = '/signup'>
          <Signup />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
