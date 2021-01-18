import React from 'react';

const Home = () =>{
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
                        <img style = {{marginRight:'10%'}} src = 'assets/male.svg' alt = 'male logo' />
                        <img src = 'assets/female.svg' alt = 'female logo'/>
                    </div>
                    <div className = 'featuresText'>
                        <h1>Standard Features</h1>
                        <p>
                            This tool incorporates typical features such as
                            <br />
                            resume parsing and automated emails. Employers
                            <br />
                            may set a limit on applicants if needed.
                            <br />
                        </p>
                    </div>
                </div>
                <hr className = 'line' style ={{marginTop:'12%'}} />
                
                <div id = 'homePrompts'>
                    <button>New Employee</button>
                    <button>New Employer</button>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Home;