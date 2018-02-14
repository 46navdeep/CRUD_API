import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import Divider from "material-ui/Divider";
import AddNew from "./AddNew";
import List from "./List"

class Admin extends Component {
  render() {
    return (
      <div>
        <AppBar title="Product" />
        <AddNew />
        <br />
        <Divider />
        <br />
        <List />
      </div>
    );
  }
}
export default Admin;
