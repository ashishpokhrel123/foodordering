import React, { Component } from 'react'

import {Row} from 'reactstrap';
import  food from './assets/food.png';
import './popular.css';

export default class Restuarant extends Component {
    render() {
        return (
            <div className="container">
                <p>Resturant</p>
                <Row>
             <div className="Col-md-4" id="product">
               <figure className="card card-product">
                 <div className="image_wrap">
                   <img src={food}/>
                 </div>
                 <figcaption class="info-wrap">
                 <h4 class="title">Another name of item</h4>
                 </figcaption>
               </figure>
             </div>
             <div className="Col-md-4" id="product">
               <figure className="card card-product">
                 <div className="image_wrap">
                   <img src={food}/>
                 </div>
                 <figcaption class="info-wrap">
                 <h4 class="title">Another name of item</h4>
                 </figcaption>
               </figure>
             </div>
             <div className="Col-md-4" id="product">
               <figure className="card card-product">
                 <div className="image_wrap">
                   <img src={food}/>
                 </div>
                 <figcaption class="info-wrap">
                 <h4 class="title">Another name of item</h4>
                 </figcaption>
               </figure>
             </div>
             <div className="Col-md-4" id="product">
               <figure className="card card-product">
                 <div className="image_wrap">
                   <img src={food}/>
                 </div>
                 <figcaption class="info-wrap">
                 <h4 class="title">Another name of item</h4>
                 </figcaption>
               </figure>
             </div>
           </Row>
           <hr></hr>
                
            </div>
        )
    }
}
