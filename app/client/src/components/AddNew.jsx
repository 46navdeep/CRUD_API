import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";
import Divider from "material-ui/Divider";
import $ from "jquery";


class AddNew extends Component{
  constructor(props) {
      super(props);
      this.state = {
        nam:"",
        instoc:"",
        pric:"",
        count1:0
      };
    }

    forceUpdateHandler(){
      console.log("rendering");
   this.forceUpdate();
 };


 handleUpdate = () => {
   $.ajax({
     url: "/ttt",
     type: "GET",
     success: function(result) {
   console.log(result);
   localStorage.setItem("arr", JSON.stringify(result));
   console.log(JSON.parse(localStorage.getItem("arr")));
   }
})
this.forceUpdate();
this.setState({showResults : false});
}


      handleClick = newentry => {
        localStorage.setItem("newentry", newentry);

        var parameters = {
          name: this.state.nam,
          instock: this.state.instoc,
          price: this.state.pric
        };

        $.ajax({
          url: "/ttt",
          data: parameters,
          type: "POST",
          success: function(result) {
       console.log(result);
       localStorage.setItem("arri", JSON.stringify(result));
      }
        });

      this.handleUpdate();
      this.forceUpdateHandler();
      this.setState({count1 : 0});

      };




render(){

  return(
    <div>
    <div>
    <Paper style={{color:'green'}} zDepth={5} >
  <div style={{ marginLeft: "38%", marginTop: "1%" }}>
    <br />
        <b>Name:</b><TextField
          name="1"
          hintText=""
          onChange={event => this.setState({ nam: event.target.value })}
          style={{ marginLeft: "10px" }}
        />
        <br />
        <b>InStock:</b><TextField
          name="2"
          hintText=""
          onChange={event => this.setState({ instoc: event.target.value })}
          style={{ marginLeft: "10px" }}
        />
        <br />
        <b>Price:</b><TextField
          name="3"
          hintText=""
          onChange={event => this.setState({ pric: event.target.value })}
          style={{ marginLeft: "10px" }}
        />
        <br />
        <br />
        <div style={{ marginLeft: "7%"}}>
        <RaisedButton
          label="Add New Product"
          secondary={true}
          onClick={() => this.handleClick(this.state)}
        />
      </div>
        <br />
        <br />
      </div>
    </Paper>
</div>
<div>
    <br />
      <br />
    <Divider />



</div>
</div>
);
}}

export default AddNew;
