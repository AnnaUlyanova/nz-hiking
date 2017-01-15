import React from 'react'

export default React.createClass({
  render() {
        return (
          <div className='container'>
            <div className="row">
                <div className="col-md-12">
                  <div id="notes">
                    <ul>
                      <li>Note1</li>
                      <li>Note2</li>
                      <li>Note3</li>
                    </ul>
                    <button type="button" className="btn btn-primary btn-block my-btn">Add new note</button>
                  </div>
                </div>
            </div>
          </div>
        )
    }
})
