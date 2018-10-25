import React, { Component } from 'react';
import './Userpage.css';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

class Userpage extends Component {
  render() {
    let name;
    if (localStorage.token) {
      name = jwtDecode(localStorage.token).username;
    }
    return (
      <section>
        <div className="user-header-wrapper">
          <div className="user-header">
            <p>User Locations</p>
          </div>
        </div>

        <div className="user-wrapper">
          <div className="user-settings">
            <p>User Settings</p>
            <ul>
              <Link
                className="new-location-link"
                to={'/user/' + name + '/newlocation'}
              >
                <li>New Location</li>
              </Link>
              <Link className="edit-user-link" to={'/user/' + name + '/edit'}>
                <li>Edit User</li>
              </Link>
            </ul>
          </div>
          <div className="location-wrapper">
            {this.props.user ? (
              this.props.user.savedLocations.map(location => (
                <div className="location-card">
                  <Link to={'/user/' + name + '/location/id'}>
                    <img src="/images/staticmap.png" alt="location1" />
                  </Link>
                  <div className="bottom-card">
                    <p>{location.title}</p>
                    <div className="location-button-wrapper">
                      <button className="location-edit-button">EDIT</button>
                      <button className="location-delete-button">DELETE</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    );
  }
}

export default Userpage;
