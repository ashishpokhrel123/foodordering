import React, { Component } from 'react'

import {Row} from 'reactstrap';
import  food from '../assets/food.png';
import './Css/popular.css';
import Axios from 'axios';

export default class Restuarant extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       resturant:[],
       resturantname: '',
       returantimage: '',
       config: {
        headers: { 'Authorization': `Bearer  ${localStorage.getItem('token')}` }
    },
    }
  }
  componentDidMount() {
    Axios.get('http://localhost:3002/resturants',this.config)
    .then((response)=>{
      const data = response.data;
      this.setState({popular:  data});
      console.log("data fecth");
     
    }).catch(error => console.log(error.response));
  }
  
  
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
