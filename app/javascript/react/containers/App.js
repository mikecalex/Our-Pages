import React, { Component } from 'react';
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
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
