import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'
import { ListGroup, Image } from 'react-bootstrap';


class Header extends Component {
    render() {
        return(
            
            <ListGroup horizontal>
                <ListGroup.Item>
                    <Image className="img" src="https://avatars3.githubusercontent.com/u/47496523?s=400&u=682bcbedc2f1be033e151227039a6535fe7f390c&v=4" roundedCircle/>
                        
                </ListGroup.Item>
                <ListGroup.Item>
                <Image className="icon" style={{marginRight: "15px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Facebook_Icon_%28Single_Path_-_Transparent_%22f%22%29.svg/1200px-Facebook_Icon_%28Single_Path_-_Transparent_%22f%22%29.svg.png" roundedCircle/>
                
                <Image className="icon" style={{marginRight: "15px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/599px-Instagram_icon.png" roundedCircle/>
               
                <Image className="icon" src="https://cdn.icon-icons.com/icons2/1099/PNG/512/1485482199-linkedin_78667.png" roundedCircle />
                </ListGroup.Item>
            </ListGroup>
        );
    }
}

export default Header;