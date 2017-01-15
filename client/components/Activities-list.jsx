import React from 'react'

export default React.createClass({
  render() {
        return (
          <div className='container'>
            <div className="row">
                <div className="col-md-12">
                  <div id="activities">
                    <ul>
                      <li>Walk 1</li>
                      <li>Walk 2</li>
                    </ul>
                    <button type="button" className="btn btn-primary btn-block my-btn">Learn more..</button>
                  </div>
                </div>
            </div>
          </div>
        )
    }
})
