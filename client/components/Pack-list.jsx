import React from 'react'

export default React.createClass({
  render() {
        return (
          <div className='container'>
            <div className="row">
                <div className="col-md-12">
                  <div id="pack-list">
                    <ul>
                      <li>Water Bottle</li>
                      <li>Gas stove</li>
                      <li>Sunscreen</li>
                      <li>Bug spray</li>
                    </ul>
                    <button type="button" className="btn btn-primary btn-block my-btn">Add my item</button>
                  </div>
                </div>
            </div>
          </div>
        )
    }
})
