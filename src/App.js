import React, { Component } from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Chinese from './Chinese/Chinese';
import Spanish from './Spanish/Spanish';
import Home from './Home/Home';


  

class App extends Component {
  
  render() {
    
    
    return (
      <div className="App">
      <div>
        <br/><br/>
      </div>
      
      
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/Spanish" component={Spanish}/>
        <Route path="/Chinese" component={Chinese}/>
      </Switch>
    

      </div>
    );
  }
}

export default App;
