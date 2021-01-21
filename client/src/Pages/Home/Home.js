import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import './Home.css';

const Home = () =>{
    useEffect(() =>{
        document.title = 'AnonHire';
    });

    return(
        <React.Fragment>
            <div id = 'homeContainer1'>
                <div id = 'intro'>
                    <img src = '/assets/team.svg' alt = 'female' />
                    <div>
                        <h1>Diversity is important.</h1>
                        <p>
                            An employee's qualifications should be seen without bias.
                            Anonymous Employee keeps things like names hidden until
                            employers decide to go forward with a candidate.
                        </p>
                    </div>
                </div>
                <hr className = 'line' />
            </div>

            <div id = 'homeContainer2'>
                <div id = 'features'>
                    <div className = 'imgGroup'>
                        <img style = {{marginRight:'10px'}} src = 'assets/male.svg' alt = 'male logo' />
                        <img src = 'assets/female.svg' alt = 'female logo'/>
                    </div>
                    <div className = 'featuresText'>
                        <h1>Standard Features</h1>
                        <p>
                            This tool incorporates typical features such as
                            resume parsing and automated emails. Employers
                            may set a limit on applicants if needed.
                        </p>
                    </div>
                </div>
                <hr className = 'line' />
                
                <div id = 'homePrompts'>
                        <button >Register</button>
                        <button>Login</button>
                </div>
            </div>
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default Home;