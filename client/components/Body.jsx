import React from 'react'



import Map from './Map'
import Notes from './Notes'
import Photos from './Photos'
import About from './About'

export default React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})
