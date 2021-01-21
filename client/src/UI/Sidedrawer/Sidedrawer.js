import React from 'react';
import './Sidedrawer.css';

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
            <ul>
                <li>Home</li>
                <li style = {{marginTop:'10%'}}> New Employee</li>
                <li style = {{marginTop:'10%'}}>New Employer</li>
                <li style = {{marginTop:'10%'}}>Employee Login</li>
                <li style = {{marginTop:'10%'}}>Employer Login</li>

            </ul>
        </div>
    )
}
export default SideDrawer;