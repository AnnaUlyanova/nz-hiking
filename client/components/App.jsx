import React from 'react'

//import * as api from '../api-activities.js'

import Header from './Header'
import Map from './Map'
import ButtonPdf from './Button-download'
import Activities from './Activities-list'
import PackingList from './Pack-list'
import Notes from './Notes'
import Footer from './Footer'

export default React.createClass({

  // componentDidMount () {
  //   api.getActivities(this.renderActivities)
  // },
  //
  // renderActivities(err, activities) {
  //   this.setState({
  //     activities: activities
  //   })
  // },

  render () {
    return (
      <div className='container-fluid'>
        <Header />
        <Map />
        <ButtonPdf />
        <Activities />
        <PackingList />
        <Notes />
        <Footer />
      </div>
    )
  }
})
