import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import RaisedButton from "material-ui/RaisedButton";
import Paper from "material-ui/Paper";
import {Glyphicon,Button } from 'react-bootstrap';
import $ from "jquery";
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class List extends Component{
  constructor(props) {
      super(props);
      this.state = {
         showResults:false,
         id:"",
         nam:"",
         instoc:"",
         pric:"",
        count :[]
      };
       this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    }

    forceUpdateHandler(){
   this.forceUpdate();
 };

 handleUp(tobeupdated){
      this.setState({ showResults: true });
      this.setState({id:tobeupdated})
  };

  handleDown(){
    this.setState({ showResults: false});
  }

    handleUpdate = () => {
      $.ajax({
        url: "/ttt",
        type: "GET",
        "Accept": "application/json",
        success: function(result) {
      console.log(result);
      localStorage.setItem("arr", JSON.stringify(result));
    }
  })
this.handleDown();
this.setState({count :localStorage.getItem("arr")});
this.forceUpdate();
this.forceUpdate();
}


   handleNew = newentry => {

     var parameters = {
       id : this.state.id,
       name: this.state.nam,
       instock: this.state.instoc,
       price: this.state.pric
     };

     $.ajax({
       url: "/ttt",
       data: parameters,
       type: "PUT",
       success: function(result) {
     //console.log(result);
   }
     });

   this.handleUpdate();
   };

   handleDelete = (urldel) => {
     console.log(urldel);
     let finalUrl = 'http://localhost:3002/hastobedeleated/' + urldel;
     $.ajax({
       url: finalUrl,
       type: "DELETE",
       success: function(result) {
     console.log(result);
   }
     });

      this.handleUpdate();

   };



    componentDidMount() {
        window.addEventListener('load', this.handleUpdate);
     }


render(){
  const array = (JSON.parse(localStorage.getItem("arr")));

  return(

    <div>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"></link>
  <script src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>

<span>
  <RaisedButton
    label="Render Actions"
    secondary={true}
    onClick={this.handleUpdate}
    style={{ marginLeft: "42%"}}
  />
</span>
<div className="col-md-12">
      <h3 className="centerAlign">PRODUCTS</h3>
{array.todos.length > 0 && <table className="table booksTable">
      <thead>
       <tr><th>NAME</th><th>INSTOCK</th><th>PRICE</th><th className="textCenter">Delete</th><th className="textCenter">Edit</th></tr>
      </thead>
      <tbody>
        {array.todos.map((array,i) => <tr key={i}>
        <td>{array.name}</td>
        <td>{array.instock}</td>
        <td>{array.price}</td>
         <td className="textCenter"><Button onClick={() => this.handleDelete(array._id)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="trash"/></Button></td>
         <td className="textCenter"><Button  onClick={() => this.handleUp(array._id)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
       </tr>  )
      }
      </tbody>
        </table>
    }

    <div>




{ this.state.showResults ? <Paper style={{color:'green'}} zDepth={5} >

 <p style={{ marginLeft: "38%"}}>Updating the product with id No:<b> {this.state.id}</b></p>

<div style={{ marginLeft: "38%", marginTop: "1%" }}>
<br />
    Name:<TextField
      name="1"
      hintText=""
      onChange={event => this.setState({ nam: event.target.value })}
      style={{ marginLeft: "10px" }}
    />
    <br />
    InStock:<TextField
      name="2"
      hintText=""
      onChange={event => this.setState({ instoc: event.target.value })}
      style={{ marginLeft: "10px" }}
    />
    <br />
    Price:<TextField
      name="3"
      hintText=""
      onChange={event => this.setState({ pric: event.target.value })}
      style={{ marginLeft: "10px" }}
    />
    <br />
    <br />
    <div style={{ marginLeft: "110px"}}>
    <RaisedButton
      label="UPDATE"
      secondary={true}
      onClick={() => this.handleNew(this.state)}
    />
  </div>
    <br />
    <br />
  </div>
</Paper> : null }
      </div>
</div>
</div>

);
}}

export default List;
