import React from 'react'
import Lightbox from 'react-images'

export default React.createClass({
  render() {
        return (
          <div className='container'>
              Photos
              <Lightbox
        images={[{ src: './images/gallery-1.jpg' }, { src: './images/gallery-2.jpg' }]}

        onClose={this.closeLightbox}
      />
          </div>
        )
    }
})
