import React, { Component } from 'react'
import './Home.css'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Where in the World is the ISS?</h1>
        <div>
          <img
            src={
              'https://maps.googleapis.com/maps/api/staticmap?center=' +
              this.props.currentlat +
              ',' +
              this.props.currentlong +
              '&zoom=4&size=500x500&key=AIzaSyDGpcbl_iqDQvUb-qa_-r1nh3In4QXL-xo'
            }
            alt="map of where the ISS is"
          />
        </div>
        <h2>Moscow, Russia</h2>
        <button>Refresh</button>
      </div>
    )
  }
}

export default Home
