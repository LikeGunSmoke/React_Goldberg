import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      loggedIn: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.addUser = this.addUser.bind(this);
    this.handleJoin = this.handleJoin.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    })
  };

  handleLogin(event) {
    event.preventDefault();
    this.setState({
      loggedIn: true,
      username: '',
      password: '',
    })
  };

  addUser(username, password) {
    const user = {username: username, password: password};
    axios.post('/api/users', user)
      .then((res) => {
        console.log(`Added ${user.username}`)
      })
      .catch((err) => {
        console.error(err);
      })
  };

  handleJoin(event) {
    event.preventDefault();
    this.addUser(this.state.username, this.state.password);
    this.setState({
      username: '',
      password: '',
    })
  };

  render() {
    if (!this.state.loggedIn) {
    return (
      <div>
      <h1>React Goldberg</h1>
      <form>
        <input
        name='username'
        type='text'
        value={this.state.username}
        onChange={this.handleChange}
        placeholder='Username'
       />
        <input
        name='password'
        type='text'
        value={this.state.password}
        onChange={this.handleChange}
        placeholder='Password'
        />
      </form>
      <button onClick={this.handleLogin} type='submit'>Login</button>
      <button onClick={this.handleJoin} type='submit'>Join</button>
    </div>
    )
  } else {
    return <App />
  }
 }
};

export default Login;
ReactDOM.render(<Login/>, document.getElementById('root'));