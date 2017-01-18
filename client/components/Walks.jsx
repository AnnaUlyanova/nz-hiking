import React from 'react'

export default React.createClass({
  render() {
        return (

                  <div className="col-md6">
                    <div id='walk-list'>
                      <h4>I want to explore ... </h4>
                        {this.props.walks.map( walk => {
                          return (<li key={walk.id}><a>{walk.walk_name}</a></li>)
                        })}
                    </div>
                  </div>

        )
    },
    showDetails (walk) {
      console.log(walk)
    }
})
