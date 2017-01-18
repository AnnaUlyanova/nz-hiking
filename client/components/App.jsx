import React from 'react'

import api from '../api'
// import store from '../store'
// import tempdata from '../temp-data'

import Header from './Header'
import Map from './Map'
//import Walks from './Walks'
import ButtonPdf from './Button-download'
import Activities from './Activities-list'
import PackingList from './Pack-list'
import Notes from './Notes'
import Footer from './Footer'

export default React.createClass({

  getInitialState() {
    return {
      walks: [],
      activities: []
    }
  },

  componentDidMount () {
    api.getWalks(this.renderWalks)
    api.getActivities(this.renderActivities)
  },

  // renderActivities(err, activities) {
  // store.setActivities(activities)
  //   this.setState({
  //     activities: activities
  //   })
  // },

  renderActivities(err, activities) {
    this.setState({
      activities
    })
  },

  renderWalks(err, walks) {
    this.setState({
      walks
    })
  },

  render () {
    return (
      <div className='container-fluid'>
        <Header />
        <Map />
        <ButtonPdf />
        <Activities activities={this.state.activities}/>
        <PackingList />
        <Notes />
        <Footer />
      </div>
    )
  }
})
