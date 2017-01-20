import React from 'react'

import api from '../api'

import Header from './Header'
import Map from './Map'
import Notes from './Notes'
import Footer from './Footer'

export default React.createClass({
  render () {
    return (
      <div className='container-fluid'>
        <Header />
        <Map />
        <Notes />
        <Footer />
      </div>
    )
  }
})
