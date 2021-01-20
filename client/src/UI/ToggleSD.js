import React from 'react';

const Toggle = (props) =>{
    return(
        <div id = 'toggleSD'>
            <img onClick = {props.toggle} id = 'hamburger' src = '/assets/hamburger2.png' alt = 'Hamburger Icon'/>
            <p>AnonHire</p>
            <img id = 'logo' src = '/assets/sitelogo.png' alt = 'Rocket Logo'/>
        </div>
    );
}

export default Toggle;