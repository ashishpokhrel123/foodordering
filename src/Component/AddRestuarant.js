import React, { Component } from 'react'
import { Container, Label, Form, Button, Input } from 'reactstrap'

export default class AddRestuarant extends Component {
    render() {
        return (
            <div>
                 <Container>

             <div  class="addfoodbox" className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">

  

            <div class="panel-heading">
                 <div className="panel-title">Add Restuarant</div>




<Form>
        <Label>Restuarant name</Label>
      <Input type="text" name="restname"/>
        <Label>Location</Label>
        <Input type="text" name="restlocation"/>
      <Label> Food item  </Label>
     
      
      <Button className="btn btn-success">Add</Button>


</Form>
</div>
</div>



</Container>
</div>
                
         
        )
    }
}
