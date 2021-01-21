import React,{useEffect,useState} from 'react';
import './EmployeeSignup.css';

const EmployeeSignup = () =>{
    useEffect(() =>{
        document.title = 'New Employee';
    },[]);

    return(
        <div id = 'signUpContainer'>
            <img src = '/assets/padlock.png' width = '30' height = '30' alt = 'padlock locked'/>
            <h1>New Employee</h1>
            <form className = 'inputs'>
                <input type = 'text' placeholder = 'First Name'/>
                <input style = {{marginTop:'1vh'}} type = 'text' placeholder = 'Last Name'/>
                <input style = {{marginTop:'1vh'}} type = 'text' placeholder = 'Email'/>
                <input style = {{marginTop:'1vh'}} type = 'password' placeholder = 'Password'/>
                <input style = {{marginTop:'1vh'}} type = 'password' placeholder = 'Confirm Password'/>
                <input style = {{marginTop:'1vh'}} type = 'file' />
                <button style = {{marginTop:'3vh'}}>Register</button>
            </form>
        </div>
    )
}

export default EmployeeSignup;