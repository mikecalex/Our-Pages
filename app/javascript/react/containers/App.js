import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class App extends Component {
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
   fetch("/api/v1/users", {
     credentials: "same-origin",
     method: "GET",
     headers: {"Content-Type": "application/json"}
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
      <div>
        <a data-method="delete" rel="nofollow" href="/users/sign_out" ><button className='small-12 medium-6 large-2 large-offset-8 cell nav-bar-links'>Sign out</button></a>
        <h1>Boo yaa</h1>
      </div>


    )
  }
}

export default App
