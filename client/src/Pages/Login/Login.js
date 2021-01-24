import React,{useState,useEffect} from 'react';
import './Login.css';

const Login = () =>{
    useEffect(() =>{
        document.title = 'Login';
    });

    const [identity, updateIdentity] = useState('employee');

    const changeIdentity = (event) =>{
        let value = event.target.value;
        updateIdentity(value);
        console.log(identity);
    }

    return(
        <div id = 'loginContainer'>
            <img src = '/assets/unlock.png' width = '30' height = '30' alt = 'unlock' />
            <h1>{(identity === 'employee') ? 'Existing Candidate' : 'Existing Employer'}</h1>
            
            <div id = 'type'>
                <div className = 'radioGroup'>
                    <label for = 'employeeChoice'>Candidate</label>
                    <input onClick = {changeIdentity} defaultChecked type = 'radio' id = 'candidate' name = 'identify' value = 'employee' />
                </div>
                <div className = 'radioGroup'>
                    <label for = 'employerChoice'>Employer</label>
                    <input onClick = {changeIdentity} type = 'radio' id = 'employer' name = 'identify' value = 'employer'/>
                </div>
            </div>

            <form>
                <input type = 'text' placeholder = {(identity === 'employee') ? 'Candidate Email' : 'Company Email'}/>
                <input type = 'password' placeholder = 'Password'/>
                <button>Login</button>
            </form>
        </div>
    );
}



export default Login;