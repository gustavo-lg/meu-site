import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tabs, Tab } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { ListGroup, ListGroupItem } from 'react-bootstrap';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs defaultActiveKey="sobre" id="uncontrolled-tab-example">
          <Tab eventKey="sobre" title="Sobre">
            <ListGroup>
              <h1 className="text-center">
                SOBRE
              </h1>

                <hr className="col-md-3 ml-auto mr-auto" />

                <div className="row">
                  
                  <div class="col-md-4 ml-auto mr-auto text-left">
                  <ListGroupItem>
                    <p className="lead">
                      Me chamo Gustavo, atualmente tenho 24 anos, sou estudante, cursando superior de Gestão de
                      Tecnologia
                      da Informação.
                    </p>
                    <p className="lead">
                      Sou apaixonado por jogos e informatica, o que acabou evoluindo meu inglês sem eu ao menos
                      perceber.
                      Atualmente descobri uma nova paixão, o Desenvolvimento-WEB, estou com
                      foco em adquirir conhecimento para ingressar na área,
                      especificadamente Front-End.
                    </p>

                    <a target="_blank" href="https://linkedin.com/in/gustavo-leandro-gonçalves-37b6bb128/">
                      <Image id="img" src="data:image/png;base64,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"
                      roundedCircle />
                    </a>
                    <a target="_blank" href="https://github.com/gustavo-lg" style={{marginLeft: "5px"}}>
                      <Image id="img" src="https://image.flaticon.com/icons/svg/25/25231.svg"roundedCircle />
                    </a>
                    </ListGroupItem>
                  </div>
                </div>
                
              </ListGroup>
          </Tab>
                <Tab eventKey="formacao" title="Formação">
                    <h1 className="text-center">
                        FORMAÇÃO
                    </h1>

                    <hr className="col-md-3 ml-auto mr-auto" />

      
                      <div className="row">
                          <div className="col-md-4 mr-auto ml-auto text-left">
                            <ListGroupItem>
                              <p className="lead">
                                  <b> Nível:</b> Técnologo;
                                  <br/>
                                  <b>Instituição:</b> FAEL – Faculdade Educacional da Lapa;
                                  <br/>
                                  <b> Curso:</b> Gestão da Tecnologia da Informação;
                                  <br/>
                                  <b> Semestre:</b> 4º;
                                  <br/>
                                  <b> Turno:</b> EAD.
                              </p>
                            </ListGroupItem>
                          </div>
                      </div>
                </Tab>
                <Tab eventKey="experiencia" title="Experiencia">
                  <h1 className="text-center">
                    EXPERIENCIA
                  </h1>

                  <hr className="col-md-3 ml-auto mr-auto" />


                    <div className="row">
                      <div className="col-md-4 ml-auto text-left">
                      <ListGroupItem>
                          <p className="lead" style={{height: 200}}>
                              <b>Empresa:</b> Dígitro Tecnologia S.A
                              <br/>
                              <b> Cargo:</b> Atendente
                              <br/>
                              <b> Atividades:</b> Abertura de chamado por telefone conforme solicitação do
                              cliente
                              visando
                              a
                              adição e detalhamento do máximo de informações referente a ocorrência ou
                              solicitação.
                          </p>
                          </ListGroupItem>
                      </div>
                      <div className="col-md-4 mr-auto text-left">
                      <ListGroupItem>
                          <p className="lead" style={{height: 200}}>
                              <b> Empresa:</b> Secretaria do Estado da Fazenda
                              <br/>
                              <b> Cargo:</b> Estagiario Suporte
                              <br/>
                              <b> Atividades:</b> Dar suporte para os predios da SEFAZ do Centro de Floripa via
                              telefone,
                              helpdesk e presencial, efetuando manutenção em computadores, manutenção
                              preventiva,
                              limpeza, instalação de softwares e OS.
                          </p>
                          </ListGroupItem>
                        </div>
                      </div>
                </Tab>
                <Tab eventKey="habilidades" title="Habilidades">
                  <h1 className="text-center">
                    HABILIDADES
                  </h1>
                 
                  <hr className="col-md-3 ml-auto mr-auto" />


                  <div className="row text-left">
                      <div className="col-md-4 mr-auto ml-auto">
                        <ListGroupItem>
                          <p className="lead">
                              • Reparo de computadores;
                              <br/>
                              • Atendimento ao Cliente;
                              <br/>
                              • Inglês (Avançado);
                              <br/>
                              • JavaScript (básico);
                              <br/>
                              • React.JS (básico);
                              <br/>
                              • React-bootstrap (básico);
                              <br/>
                              • Html;
                              <br/>
                              • Bootstrap;
                              <br/>
                              • CSS;
                              <br/>
                              • GitHub;
                              <br/>
                              • GitLab.

                          </p>
                        </ListGroupItem>
                      </div>
                  </div>
                </Tab>
                <Tab eventKey="contato" title="Contato">
                  <h1 className="text-center">
                    CONTATO
                  </h1>
                 
                  <hr className="col-md-3 ml-auto mr-auto" />


                  <div class="row text-left">
                    <div class="col-md-4 mr-auto ml-auto">
                      <ListGroupItem>
                        <p class="lead">
                            <b> Nome:</b> Gustavo Leandro Gonçalves
                            <br/>
                            <b> Tel. Fixo:</b> (48) 3257-6191
                            <br/>
                            <b> Celular:</b> (48) 9 9961-1092
                            <br/>
                            <b> E-mail:</b> guto_leandro95@hotmail.com
                        </p>
                      </ListGroupItem> 
                    </div>
                  </div>
                </Tab>
                <Tab eventKey="local" title="Local">
                  <h1 className="text-center">
                    LOCAL
                  </h1>
                  
                  <hr className="col-md-3 ml-auto mr-auto" />


                  <div class="row ">
                  <br/>
                    <div class="col-md-12 mr-auto ml-auto">
                        <br/>
                        <div class="col-md-4 mr-auto ml-auto">
                          <ListGroupItem>
                              <p class="lead">
                                  Brasil - SC / São José
                              </p>
                              <br/>
                          </ListGroupItem>
                        </div>
                    </div>
                  </div>
                </Tab>
        </Tabs>
            </div>
            );
          }
        }
        
export default App;
