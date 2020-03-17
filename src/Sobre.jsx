import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


class Sobre extends Component {
    render(){
        return(
          
            <ListGroup>
              <h1 className="text-center">
                SOBRE
              </h1>

                <hr className="col-md-3 ml-auto mr-auto" />

                <div className="row">
                  
                  <div className="col-md-4 ml-auto mr-auto text-left lead">
                  <ListGroupItem>
                    <p>
                      Me chamo Gustavo, atualmente tenho 24 anos, sou estudante, cursando superior de Gestão de
                      Tecnologia
                      da Informação.
                    </p>
                    <p>
                      Sou apaixonado por jogos e informatica, o que acabou evoluindo meu inglês sem eu ao menos
                      perceber.
                      Atualmente descobri uma nova paixão, o Desenvolvimento-WEB, estou com
                      foco em adquirir conhecimento para ingressar na área,
                      especificadamente Front-End.
                    </p>
                    
                    </ListGroupItem>
                  </div>
                </div>
            </ListGroup>
          

          
        );
    }
}

export default Sobre;