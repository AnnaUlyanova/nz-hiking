import React from 'react'

export default React.createClass({
  render() {
        return (
          <div className='container'>
            <div className="row">
                <div className="col-md-12">
                  <div id="activities">
                    <ul>
                      {this.props.activities.map( activity => {
                        return (<li key={activity.id}>{activity.description}</li>)
                      })}
                    </ul>
                    <button type="button" className="btn btn-primary btn-block my-btn">Learn more..</button>
                  </div>
                </div>
            </div>
          </div>
        )
    }
})
