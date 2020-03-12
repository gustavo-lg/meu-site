import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';
import Sobre from "./Sobre";
import Experiencia from "./Experiencia";
import Formacao from "./Formacao";
import Habilidades from "./Habilidades";
import Contato from "./Contato";
import Local from "./Local";
import Header from './Header';


class App extends Component {
  render() {
    return (
      <div className="App col-md-8 mr-auto ml-auto">
        <Header/>
        <Tabs defaultActiveKey="sobre" id="uncontrolled-tab-example">
          <Tab eventKey="sobre" title="Sobre">
            <Sobre/>
          </Tab>
                <Tab eventKey="formacao" title="Formação">
                  <Formacao/>
                </Tab>
                <Tab eventKey="experiencia" title="Experiencia">
                  <Experiencia/>
                </Tab>
                <Tab eventKey="habilidades" title="Habilidades">
                  <Habilidades/>
                </Tab>
                <Tab eventKey="contato" title="Contato">
                  <Contato/>
                </Tab>
                <Tab eventKey="local" title="Local">
                  <Local/>
                </Tab>
        </Tabs>
            </div>
            );
          }
        }
        
export default App;
