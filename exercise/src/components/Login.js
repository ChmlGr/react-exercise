import React, { Component } from 'react';
import { login } from '../services/login';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: '',
    };
    this.login = this.login.bind(this);
    this.username = React.createRef();
    this.password = React.createRef();
  }

  login() {
    login(this.username.current.value, this.password.current.value)
      .then(() => {
        this.setState({ error: '' });
        this.props.onLogin();
      })
      .catch(e => this.setState({ error: e }));
  }

  render() {
    return (
      <div className={`modal ${this.props.active ? 'is-active' : ''}`}>
        <div className={`modal-background`}></div>
        <div className={`modal-content`}>
          <div className='box'>
            <h2 className='title'>Login</h2>
            <p className='subtitle'>username is 'ximenagarcia' and password is 'aP4ssw0rd'</p>
            {this.state.error && <p className={`subtitle has-text-danger`}>{this.state.error}</p>}
            <div className='field'>
              <p className='control'>
                <input className='input' type='text' ref={this.username} placeholder='Username' />
              </p>
            </div>
            <div className='field'>
              <p className='control'>
                <input className='input' type='password' ref={this.password} placeholder='Password' />
              </p>
            </div>
            <div className='field'>
              <p className='control'>
                <button className='button is-success' onClick={this.login}>
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
        <button className={`modal-close is-large`} aria-label='close' onClick={this.login}></button>
      </div>
    );
  }
}
