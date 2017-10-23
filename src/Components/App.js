'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ListHomes from './ListHomes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
//css
require('style-loader!./App.css');

class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        style: 1,
        quality: 5,
      };
    }

  handleStyleChange(event, index, style){
    console.log('style', style)
    this.setState({
      style: style,
    })
  }
  hangleStarChange(event, index, quality) {
    console.log('star', quality)
    this.setState({
      quality: quality,
    })
  }

  render() {
    const { open } = this.state
    const styles = {
      customWidth: {
        width: 200,
      },
    };

    return (
      <MuiThemeProvider>
        <div>
          <h1>Home Improvement</h1>
          <DropDownMenu value={this.state.style} onChange={this.handleStyleChange.bind(this)}>
            <MenuItem value={1} primaryText="Contemporary" />
            <MenuItem value={2} primaryText="Country" />
            <MenuItem value={3} primaryText="Craftsman" />
            <MenuItem value={4} primaryText="Industrial" />
            <MenuItem value={5} primaryText="Modern" />
            <MenuItem value={6} primaryText="Rustic" />
            <MenuItem value={7} primaryText="Traditional" />
            <MenuItem value={8} primaryText="Transitional" />
          </DropDownMenu>
          <DropDownMenu value={this.state.quality} onChange={this.hangleStarChange.bind(this)}>
            <MenuItem value={5} primaryText="★★★★★" />
            <MenuItem value={4} primaryText="★★★★" />
            <MenuItem value={3} primaryText="★★★" />
            <MenuItem value={2} primaryText="★★" />
            <MenuItem value={1} primaryText="★" />
          </DropDownMenu>
          <ListHomes/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
