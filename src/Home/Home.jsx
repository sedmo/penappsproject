import React, { Component } from 'react';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import Panel from 'muicss/lib/react/panel';
import {Link} from 'react-router-dom';
import './Home.css';

class home extends Component{
    
    state = {
        subjects: ["Spanish", "Chinese"]
      }
    render(){
        const but = {
            width: "auto",
            marginBottom: "1em"
          };
          const subjectsSpitter = this.state.subjects.map((val)=>{
            let linker = `/${val}`;
            return(<Panel style={but}><Link to={linker}><div className="btn">{val}</div></Link></Panel>)
          });
        return(
            <div>
                <WelcomeSection/>
                {subjectsSpitter}
            </div>

        );

    }
}

export default home;