import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default class TopBar extends Component {
  render() {
    const display = this.props.isLoggedin ? (
      <span
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: 'lightgrey',
          color: 'black',
          padding: '10px',
          fontFamily: 'serif',
        }}
      >
        XG
      </span>
    ) : (
      <Button style={{ backgroundColor: 'blue', color: 'white' }} onClick={this.props.handleAuth}>
        Login
      </Button>
    );

    return (
      <header
        style={{
          height: 48,
          width: '100%',
          backgroundColor: 'rgb(102,63,180)',
          color: 'white',
          padding: '6px 10px',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <div style={styles.logo}>
          <Link to='/'>
            <img alt={'logo'} style={{ maxHeight: 40, flex: 1 }} src='favicon-196x196.png' />
          </Link>
        </div>
        <div>{'Modus Create'}</div>
        <div style={{ float: 'left', color: 'white', flex: 1 }} />
        <div style={{ float: 'right', paddingRight: 20 }}>
          {display}
          <Button style={{ backgroundColor: 'red', color: 'white' }} onClick={this.props.handleAuth}>
            {this.props.isLoggedin ? 'Logout' : 'Signup'}
          </Button>
        </div>
      </header>
    );
  }
}

const styles = {
  logo: {
    float: 'left',
    margin: 8,
  },
};
