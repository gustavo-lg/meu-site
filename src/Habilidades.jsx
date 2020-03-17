import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


class Habilidades extends Component {
    render(){
        return(
            <ListGroup>
                <h1 className="text-center">
                    HABILIDADES
                </h1>
                  
                <hr className="col-md-3 ml-auto mr-auto" />

                <div className="row text-left">
                    <div className="col-md-4 mr-auto ml-auto">
                        
                            <div className="lead">
                                
                                <ListGroupItem>
                                • Reparo de computadores;
                                </ListGroupItem>
                               
                                <ListGroupItem>
                                • Atendimento ao Cliente;
                                </ListGroupItem>
                               
                                <ListGroupItem>
                                • Inglês (Avançado);
                                </ListGroupItem>
                               
                                <ListGroupItem>
                                • JavaScript (básico);
                                </ListGroupItem>
                               
                                <ListGroupItem>
                                • React.JS (básico);
                                </ListGroupItem>
                               
                                <ListGroupItem>
                                • React-bootstrap (básico);
                                </ListGroupItem>
                               
                                <ListGroupItem>
                                • Html;
                                </ListGroupItem>
                                
                                <ListGroupItem>
                                • Bootstrap;
                                </ListGroupItem>
                            
                                <ListGroupItem>
                                • CSS;
                                </ListGroupItem>
                                
                                <ListGroupItem>
                                • GitHub;
                                </ListGroupItem>
                               
                                <ListGroupItem>
                                • GitLab.
                                </ListGroupItem>
                            </div>
                        
                    </div>
                </div>
            </ListGroup>
        );
    }
}

export default Habilidades;