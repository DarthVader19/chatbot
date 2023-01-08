
import './App.css';
import SignInForm from './frontend/components/signin.js';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Chatbot from './frontend/components/chatbot.js';


class App extends React.Component {
  
  constructor(){
    super()
    this.state={
      route:'/'
    
      }
  }
 
  router(route){
  this.setState({route:route})
  }

  render(){
 
    return (
      <div>
        { (this.state.route==='/'&&<Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/app/sign-in">SignIn</Link>
              </li>
              <li>
                <Link to="/app/chatbot">Chatbot</Link>
              </li>
            </ul>
          </nav>
         <Routes>
         <Route path="/app/sign-in" element={<SignInForm router={this.router}/>} />
          <Route path="/app/chatbot"  element={<Chatbot/>} />
         </Routes>
         
          
        </div>
      </Router>)||(this.state.route==='chatbot'&& <Chatbot/>)

        }
      </div>
      
      
      
    );
  }
  
}

export default App;
