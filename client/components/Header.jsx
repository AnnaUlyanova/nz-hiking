import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render () {
    return (
      <header>
        <div className="row">
          <div className="col-md-12">
            <div className="wide">
              <h1 className="text-center" id="header-text">New Zealand Great Hiking Adventure</h1>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-default" id="main-navigation">
          <div className="container-fluid">


          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#tocollapse" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div className="collapse navbar-collapse" id="tocollapse">
                <ul className="nav navbar-nav">

                  <li><Link to ="/">Home</Link></li>
                  <li><Link to = "/my-notes">My Notes</Link></li>
                  <li><Link to = "/photo-gallery">Photo Gallery</Link></li>
                  <li><Link to = "/about">About</Link></li>
                </ul>
              </div>
            </div>
        </nav>

      </header>
    )
  }
})
