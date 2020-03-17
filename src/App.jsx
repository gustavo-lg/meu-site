import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Tabs, Tab } from 'react-bootstrap';
import Sobre from "./Sobre";
import Experiencia from "./Experiencia";
import Formacao from "./Formacao";
import Habilidades from "./Habilidades";
import Contato from "./Contato";
import Local from "./Local";
import Header from './Header';
import { Tabs, useTabState, usePanelState } from '@bumaga/tabs' 
import { motion } from 'framer-motion'

const cn = (...args) => args.filter(Boolean).join(' ')

const Tab = ({ children }) => {
  const { isActive, onClick } = useTabState()

  return (
    <button
      className={cn('accordion-tab', isActive && 'active')}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

const panel = {
  hidden: { height: 0 },
  visible: { height: 'auto' }
}

const Panel = ({ children }) => {
  const isActive = usePanelState()

  return (
    <motion.div
      className='accordion-panel'
      animate={isActive ? 'visible' : 'hidden'}
      variants={panel}
    >
      {children}
    </motion.div>
  )
}


class App extends Component {
  render() {
    return (
      <div className="App col-md-8 mr-auto ml-auto">
        <Header/>
          <Tabs>
            <div className="accordion">
              <Tab >Sobre </Tab>
                <Panel>
                  <Sobre/>
                </Panel>
             
              <Tab >Formação</Tab>
                <Panel>
                  <Formacao/>
                </Panel>  

              <Tab >Experiencia</Tab>
                <Panel>
                  <Experiencia/>
                </Panel>
              
              <Tab >Habilidades</Tab>
                <Panel>
                  <Habilidades/>
                </Panel>
              
              <Tab >Contato</Tab>
                <Panel>
                  <Contato/>
                </Panel>
              
              <Tab >Local</Tab>
                <Panel>
                  <Local/>
                </Panel>
                  
            </div>
            </Tabs>
      </div>
    );
  }
}
        
export default App;
