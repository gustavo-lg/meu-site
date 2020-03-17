import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


class Experiencia extends Component {
    render(){
        return(
            <div>
                <h1 className="text-center">
                  EXPERIENCIA
                </h1>

                <hr className="col-md-3 ml-auto mr-auto" />

                    <div className="row">
                        <div className="col-md-5 ml-auto text-left">
                            <ListGroup>
                                <div className="lead">
                                    <ListGroupItem variant="info">
                                    <b>Empresa:</b> Dígitro Tecnologia S.A
                                    </ListGroupItem>
                                    
                                    <ListGroupItem>
                                    <b> Cargo:</b> Atendente
                                    </ListGroupItem>
                                    
                                    <ListGroupItem>
                                    <b> Atividades:</b> Abertura de chamado por telefone conforme solicitação do
                                    cliente
                                    visando
                                    a
                                    adição e detalhamento do máximo de informações referente a ocorrência ou
                                    solicitação.
                                    </ListGroupItem>
                                </div>
                            </ListGroup>
                           
                        </div>
                        <div className="col-md-5 mr-auto text-left">
                            <ListGroup>
                                <div className="lead" >
                                    <ListGroupItem variant="info">
                                    <b> Empresa:</b> Secretaria do Estado da Fazenda
                                    </ListGroupItem>
                                    
                                    <ListGroupItem>
                                    <b> Cargo:</b> Estagiario Suporte
                                    </ListGroupItem>
                                    
                                    <ListGroupItem>
                                    <b> Atividades:</b> Dar suporte para os predios da SEFAZ do Centro de Floripa via
                                    telefone,
                                    helpdesk e presencial, efetuando manutenção em computadores, manutenção
                                    preventiva,
                                    limpeza, instalação de softwares e OS.
                                    </ListGroupItem>
                                </div>
                            </ListGroup>
                            <br/>
                          </div>
                    </div>
                </div>
        );
    }
}

export default Experiencia;