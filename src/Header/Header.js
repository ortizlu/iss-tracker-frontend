import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

class Header extends Component {
  handleLogout = e => {
    e.preventDefault()
    this.props.handleLogOut()
    this.props.history.push('/')
  }

  render() {
    let name
    if (localStorage.token) {
      name = jwtDecode(localStorage.token).username
    }
    return (
      <header>
        <div className="logo">
          <Link to="/" className="logo-link">
            <img src="/images/iss_logo.png" alt="ISS Logo" />
            <p>WOW-ISS</p>
          </Link>
        </div>
        <ul className="header-signup">
          {localStorage.token ? (
            <div className="flex">
              <a href={'/user/' + name}>
                <li>Hello, {name}</li>
              </a>
              <a href="#" onClick={this.handleLogout}>
                <li>Logout</li>
              </a>
            </div>
          ) : (
            <div className="flex">
              <Link to="/signup">
                <li>Signup</li>
              </Link>
              <Link to="/login">
                <li>Login</li>
              </Link>
            </div>
          )}
        </ul>
      </header>
    )
  }
}

export default withRouter(Header)
