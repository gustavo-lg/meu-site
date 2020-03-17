import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


class Contato extends Component {
    render(){
        return(
            <ListGroup>
                <h1 className="text-center">
                CONTATO
                </h1>
            
                <hr className="col-md-3 ml-auto mr-auto" />

                <div className="row text-left">
                    <div className="col-md-4 mr-auto ml-auto">
                       
                            <div className="lead">
                                <ListGroupItem>
                                <b> Nome:</b> Gustavo Leandro Gonçalves
                                </ListGroupItem>
                                
                                <ListGroupItem>
                                <b> Tel. Fixo:</b> (48) 3257-6191
                                </ListGroupItem>
                                
                                <ListGroupItem>
                                <b> Celular:</b> (48) 9 9961-1092
                                </ListGroupItem>
                                
                                <ListGroupItem>
                                <b> E-mail:</b> guto_leandro95@hotmail.com
                                </ListGroupItem>
                            </div>
                        
                    </div>
                </div>
            </ListGroup>
        );
    }
}

export default Contato;