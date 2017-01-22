import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
        return (
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <h2 className="walk-header">Explore the 9 Great Walks</h2>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <div id='map'></div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12'>
                <h2 className="walk-header"><Link to = "/photo-gallery">Get Inspired</Link></h2>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12 gallery'>
                <img src='./images/gallery-1.jpg' width='200px'/>
                <img src='./images/gallery-2.jpg' width='200px'/>
                <img src='./images/gallery-3.jpg' width='200px'/>
                <img src='./images/gallery-4.jpg' width='200px'/>
                <img src='./images/gallery-5.jpg' width='200px'/>
              </div>
            </div>
        </div>
        )
    }
})
