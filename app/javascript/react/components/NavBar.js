import React, { Component } from 'react';
import { Link } from 'react-router'

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {}
    }
    this.loadUserData = this.loadUserData.bind(this)
  }

  componentDidMount() {
    this.loadUserData();
  }

  loadUserData() {
    fetch('/api/v1/users', {
      credentials: 'same-origin',
      method: 'GET',
      headers: {'Content-Type': 'application/json'}
    })
    .then(response => {
      if (response.ok) {
        return response;
      }
    })
    .then(response => response.json())
    .then(json => {
      this.setState({
        currentUser: json.current_user
      })
    })
  }

  render() {
    return(
      <div className="navbar">
        <ul className="nav">
          <li><Link to='/' className="nav-home">OurPages</Link></li>
          <li><a className="nav-username" href="#">Hi, {this.state.currentUser.first_name}!</a></li>
          <li><a className="nav-signout" data-method="delete" rel="nofollow" href="/users/sign_out" ><button >Sign out</button></a></li>
        </ul>
        {this.props.children}
      </div>
  )
}
}

export default NavBar;
