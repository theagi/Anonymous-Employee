import React from 'react';

const Navbar = () =>{
    return(
        <div id = 'navContainer'>
            <div id = 'logo_name'>
                <img src = '/assets/sitelogo.png' alt = 'logo' height = '50' width = '50'/>
                <h2>Anonymous Employee</h2>
            </div>
            
            <div id = 'navButtons'>
                <button>Employee</button>
                <button>Employer</button>
            </div>
        </div>
    )
}

export default Navbar;