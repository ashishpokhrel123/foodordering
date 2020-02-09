import React, { Component } from 'react'
import { Container, Label, Form, Button, Input } from 'reactstrap'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class  extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             foodname: '',
             foodprice: '',
             config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            },
             //foodimage:'',
             isInsert: false,
             
             
             

             

        }
     
      

        
    }
    

    handlechnage = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addfood = (e) => {
        e.preventDefault();
        console.log(this.state)

        Axios.post('http://localhost:3002/foods', this.state)
        .then((response)=>{
            console.log(response.data);
            localStorage.setItem('token', response.data.token)
            this.setState({
                foodname:'',
                foodprice:'',
                isInsert: true
                

            });
            
        }).catch((err) => console.log(err));

        }
    
    

    
    render() {
        if(this.state.isInsert == true){
            return <Redirect to='/addfood'/>
        }
        return (
            <div>
                <Container>

                    <div  class="addfoodbox" className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">

                      

                        <div class="panel-heading">
                <div className="panel-title">Add Food</div>

               
           
   
      <Form>
          <Label>Food name</Label>
          <Input type="text" name="foodname" value={this.state.foodname} onChange={this.handlechnage}/>
          <Label>Price</Label>
          <Input type="text" name="foodprice" value={this.state.foodprice} onChange={this.handlechnage}/>
          <Label>Image</Label>
          <Input type="file" name="foodimage"/>
          <Label>   </Label>
          <Button className="btn btn-success" onClick={this.addfood}>Add</Button>
  
              
      </Form>
      </div>
      </div>
   
              
         
                </Container>
            </div>
        )
    }
}
