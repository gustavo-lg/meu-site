import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tabs, Tab} from 'react-bootstrap';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Home">
            
          </Tab>
          <Tab eventKey="profile" title="Profile">
            
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
