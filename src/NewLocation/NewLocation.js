import React, { Component } from 'react';
import './NewLocation.css';
import axios from 'axios';

class NewLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      location: ''
    };
  }
  createLocation = e => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/locations/', this.state, {
        headers: {
          Authorization: localStorage.token
        }
      })
      .then(response => {
        console.log('new location created');
        this.props.history.push('/user/' + this.props.user.username);
        this.props.userShow();
      }).catch(err => console.log(err))
  };

  changeText = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <section className="newlocation-wrapper">
        <div className="newlocation-top">
          <p>New Location</p>
        </div>
        <div className="newlocation-main">
          <form
            className="newlocation-main-wrapper"
            // onSubmit={this.createLocation}
          >
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.changeText}
            />
            <label htmlFor="location">Location (Coordinates or Address):</label>
            <input
              type="text"
              name="location"
              value={this.state.location}
              onChange={this.changeText}
            />
            <div className="create-button-wrapper">
              <button className="create-button" onClick={this.createLocation}>
                CREATE
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default NewLocation;
