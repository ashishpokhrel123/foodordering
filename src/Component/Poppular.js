import React, { Component } from 'react'
import { CardGroup,Card,  Row,CardBody, CardTitle, CardSubtitle,CardText,Button,CardImg } from 'reactstrap'

import  food from './assets/food.png';
import wine from './assets/wine.png';
import cake from './assets/cupcake.png';
import fries from './assets/fries.png';

import './popular.css';

export default class  extends Component {
    render() {
        return (
            <Row id="row">
            <div className="popcat">
              
             <Card id="card">
             <CardImg top width="100%" src={food} alt="Card image cap"  id="cardimage"/>
              <CardBody>
          
         
            </CardBody>
             </Card>
            </div>
            <div className="popcat2">
              <Card id="card">
             <CardImg top width="100%" src={food} alt="Card image cap"  id="cardimage"/>
              <CardBody>
          
         
            </CardBody>
             </Card>
             </div>
            
             <div className="popcat3">
              
            <Card id="card">
              <CardImg top width="100%" src={food} alt="Card image cap"  id="cardimage"/>
           <CardBody>


          </CardBody>
          </Card>
           </div>
           </Row>
           
           
        )
    }
}

    

