import React, { Component } from 'react'
import I from '../assets/b1.jpeg'



import './landing.css';



export default class Landing extends Component {
    render() {
        return (
            <div class="container">
  <div class="row">
    <div class="col-md">
        <div class="col-md-8" id="intro">
        <h1>The final super food snack</h1></div>
        <div class="col-sm-12">
        <p>The minimalist and eclectric composed of severalrecycled, raw and reworked elements
            invites from scratch to share a passion for cooking.
        </p>
        </div>

        </div>
    
    

    <div class="col-md">
     <img src={I} className="Imagefluids"></img>
    </div>
  </div>
</div>
        )
    }
}
