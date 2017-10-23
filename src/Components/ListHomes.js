import React, { Component } from 'react'
import Checkbox from 'material-ui/checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';

var localHomes = require('../data.json')

class ListHomes extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      homes: [],

    }
  }
  componentWillMount() {
    this.setState({
      homes: localHomes.data,
    })
  }
  render() {
    const { homes } = this.state
    console.log(homes)
    const styles = {
      block: {
        maxWidth: 10,
      },
      checkbox: {
        marginBottom: 16,
      },
    };

    return (
      <div className='list-homes-content'>
        {homes !== undefined && homes && (homes.map((home, index) => (
          <div>
          <div key={home['_id']} className='list-home-image'>
            <img src={home.imageKey}/>
          </div>
          <Checkbox
          checkedIcon={<ActionFavorite />}
          uncheckedIcon={<ActionFavoriteBorder />}
          label=""
          style={styles.checkbox}
          />
          </div>
        ))
        )}
      </div>
    )
  }
}
export default ListHomes
