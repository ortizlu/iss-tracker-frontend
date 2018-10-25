import React, { Component } from 'react';
import './Userpage.css';

class Userpage extends Component {
  render() {
    return (
      <div className="grid-container">
        <div className="user-settings">
          <p>User Settings</p>
          <ul>
            <a className="new-location-link" href="/user/:id/newlocation">
              <li>New Location</li>
            </a>
            <a className="edit-user-link">
              <li>Edit User</li>
            </a>
          </ul>
        </div>
        <div className="user-locations">
          <p>User Locations</p>
        </div>
        <div className="location one">
        <p>Test Title</p>
          <img src="/images/staticmap.png" />
          <div className="location-button-wrapper">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
        <div className="location two">
        <p>Test Title</p>
          <img src="/images/staticmap.png" />
          <div className="location-button-wrapper">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
        <div className="location three">
          <img src="/images/staticmap.png" />
        </div>
        <div className="location four">
        <p>Test Title</p>
          <img src="/images/staticmap.png" />
          <div className="location-button-wrapper">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
        <div className="location five">
        <p>Test Title</p>
          <img src="/images/staticmap.png" />
          <div className="location-button-wrapper">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
        <div className="location six">
          <img src="/images/staticmap.png" />
        </div>
        <div className="location seven">
          <img src="/images/staticmap.png" />
        </div>
        <div className="location eight">
          <img src="/images/staticmap.png" />
        </div>
        <div className="location nine">
        <p>Test Title</p>
          <img src="/images/staticmap.png" />
          <div className="location-button-wrapper">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Userpage;
