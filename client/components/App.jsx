import React from 'react'

import Header from './Header'
import Map from './Map'
import ButtonPdf from './Button-download'
import Activities from './Activities-list'
import PackingList from './Pack-list'
import Footer from './Footer'

export default React.createClass({
  render () {
    return (
      <div className='container-fluid'>
        <Header />
        <Map />
        <ButtonPdf />
        <Activities />
        <PackingList />
        <Footer />
      </div>
    )
  }
})
