import React, { Component } from 'react'
import GetUsers from './components/GetUsers'

import API from './components/Api'

export class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      repos: null
    }

    this.userRequest = this.userRequest.bind(this);
  }

  userRequest(e) {
    e.preventDefault();
    const id = e.target.elements.id.value;
    if (id) {
      API.get(`/articles/${id}`).then(res => {
        // const repos = res.data.id
        // this.setState({ repos })
        console.log(res)
      })

    }
  }

  render() {
    return (
      <div>
        <GetUsers getUser={this.userRequest} />
        { this.state.repos ? <p>ID number: {this.state.repos}</p> :
        <p>Please Enter a ID.</p> }
      </div>
    )
  }
}

export default App
