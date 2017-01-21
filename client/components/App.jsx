import React from 'react'

import api from '../api'

import Header from './Header'
import Body from './Body'
import Footer from './Footer'

export default React.createClass({
  render () {
    return (
      <div className='container-fluid'>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    )
  }
})
