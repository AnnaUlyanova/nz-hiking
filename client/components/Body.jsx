import React from 'react'



import Map from './Map'
import Notes from './Notes'
import Photos from './Photos'
import About from './About'

export default React.createClass({
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
        {this.props.children}
          </div>
        </div>
      </div>
    )
  }
})
