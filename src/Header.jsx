import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { ListGroup, Image } from 'react-bootstrap';


class Header extends Component {
    render() {
        return(
            
            <ListGroup >
               
                <ListGroup.Item>
                <div className="center">
                   <Image className="img" src="https://avatars3.githubusercontent.com/u/47496523?s=400&u=682bcbedc2f1be033e151227039a6535fe7f390c&v=4" thumbnail roundedCircle/>
                    <h1>Olá, me chamo Gustavo</h1>
                    <hr/>
                    <h6>Estagiário de Desenvolvimento | Front End | Suporte</h6>
                    <a href="https://www.facebook.com/gustavo.leandrogoncalves" >
                    <Image className="icon" style={{marginRight: "15px"}} src="https://cdn0.iconfinder.com/data/icons/free-social-media-15/32/facebook_social_media-512.png" />
                    </a>
                    <a href="https://www.instagram.com/gu_lg/">
                    <Image className="icon" style={{marginRight: "15px"}} src="https://cdn0.iconfinder.com/data/icons/free-social-media-15/32/instagram_social_media-512.png" />
                    </a>
                    <a href="https://www.linkedin.com/in/gustavo-leandro-gon%C3%A7alves-37b6bb128/" >
                    <Image className="icon" style={{marginRight: "15px"}}  src="https://cdn0.iconfinder.com/data/icons/free-social-media-15/32/linkedin_social_media-512.png" />
                    </a>
                    <a href="https://github.com/gustavo-lg" >
                    <Image className="icon" style={{marginRight: "15px"}} src="https://cdn0.iconfinder.com/data/icons/free-social-media-15/32/github_social_media-512.png"/>
                    </a>
                </div>
                </ListGroup.Item>
            </ListGroup>
        );
    }
}

export default Header;