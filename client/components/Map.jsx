import React from 'react'
import { withGoogleMap } from 'react-google-maps';

export default React.createClass({
  render() {
        return (
            <div className='row'>
            <div className='col-md-12'>
              <div id='map'></div>
            </div>
          </div>
        )
    }
})
