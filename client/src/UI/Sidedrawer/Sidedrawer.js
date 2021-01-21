import React from 'react';
import './Sidedrawer.css';
import {Link} from 'react-router-dom';

const SideDrawer = (props) =>{
    let theClass;
    if(props.status){
        theClass = 'sideDrawer openSide';
    }else{
        theClass = 'sideDrawer';
    }

    return(
        <div className = {theClass}>
            <img onClick = {props.toggle} width = '20' height = '20' src = '/assets/cancel.png' alt = 'close nav'/>
            <ul onClick = {props.toggle}>
                <li>
                    <Link style = {{textDecoration:'none', color:'#007fff'}} to = '/'>Home</Link>
                </li>
                <li style = {{marginTop:'10%'}}>
                    <Link style = {{textDecoration:'none', color:'#007fff'}} to = '/signup'>Register</Link>
                </li>
                <li style = {{marginTop:'10%'}}>
                    <Link style = {{textDecoration:'none', color:'#007fff'}} to = '/login'>Login</Link>
                </li>
                {/* <li style = {{marginTop:'10%'}}> New Employee</li>
                <li style = {{marginTop:'10%'}}>New Employer</li>
                <li style = {{marginTop:'10%'}}>Employee Login</li>
                <li style = {{marginTop:'10%'}}>Employer Login</li> */}

            </ul>
        </div>
    )
}
export default SideDrawer;