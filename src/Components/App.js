'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListHomes from './ListHomes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
//css
require('style-loader!./App.css');

class App extends Component {

  constructor(props) {
      super(props);
      this.state = {value: 1};
    }

  handleChange(event, index, value) {
    this.setState({value});
  }

  render() {
    const { open } = this.state
    const styles = {
      customWidth: {
        width: 200,
      },
    };
    console.log(open)
    return (
      <MuiThemeProvider>
        <div>
          <h1>Home Improvement</h1>
          <DropDownMenu value={this.state.value} onChange={() => this.handleChange()}>
            <MenuItem value={1} primaryText="Contemporary" />
            <MenuItem value={2} primaryText="Country" />
            <MenuItem value={3} primaryText="Craftsman" />
            <MenuItem value={4} primaryText="Industrial" />
            <MenuItem value={5} primaryText="Modern" />
            <MenuItem value={6} primaryText="Rustic" />
            <MenuItem value={7} primaryText="Traditional" />
            <MenuItem value={8} primaryText="Transitional" />
          </DropDownMenu>
          <ListHomes/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
