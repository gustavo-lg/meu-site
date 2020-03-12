import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


class Local extends Component {
    render(){
        return(
            <ListGroup>
                <h1 className="text-center">
                LOCAL
                </h1>
                
                <hr className="col-md-3 ml-auto mr-auto" />

                <div className="row ">
                    <div className="col-md-12 mr-auto ml-auto">
                        <br/>
                        <div className="col-md-4 mr-auto ml-auto">
                            <ListGroupItem>
                                <p className="lead">
                                    Brasil - SC / São José
                                </p>
                            </ListGroupItem>
                        </div>
                    </div>
                </div>
            </ListGroup>
        );
    }
}

export default Local;