import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


class Formacao extends Component {
    render(){
        return(
            <ListGroup>
                <h1 className="text-center">
                        FORMAÇÃO
                </h1>

                <hr className="col-md-3 ml-auto mr-auto" />

                <div className="row">
                    <div className="col-md-4 mr-auto ml-auto text-left">
                        
                            <p className="lead">
                                <ListGroupItem>
                                <b> Nível:</b> Técnologo;
                                </ListGroupItem>
                                
                                <ListGroupItem>
                                <b>Instituição:</b> FAEL – Faculdade Educacional da Lapa;
                                </ListGroupItem>
                                
                                <ListGroupItem>
                                <b> Curso:</b> Gestão da Tecnologia da Informação;
                                </ListGroupItem>
                                
                                <ListGroupItem>
                                <b> Semestre:</b> 4º;
                                </ListGroupItem>
                                
                                <ListGroupItem>
                                <b> Turno:</b> EAD.
                                </ListGroupItem>
                            </p>
                        
                    </div>
                </div>
            </ListGroup>
        );
    }
}

export default Formacao;