import React, { Component } from 'react';

export default class User extends Component {
  render() {
    if (this.props.user === null) return <h3>Loading...</h3>;
    return (
      <div className='section'>
        <div className='container'>
          <div className='tile is-ancestor is-vertical'>
            <div className='tile' style={{ marginBottom: '5px' }}>
              <p className='button' onClick={this.props.goBack} style={{ cursor: 'pointer' }}>
                <i className='fas fa-arrow-left'></i> Go Back
              </p>
            </div>
            <div className='tile box'>
              <div className='tile is-parent is-2'>
                <article className='tile is-child'>
                  <figure className='image'>
                    <img src={this.props.user.picture.large} alt='User' />
                  </figure>
                </article>
              </div>
              <div className='tile is-parent'>
                <article className='tile is-child'>
                  <div className='content'>
                    <p className='title is-4'>{`${this.props.user.name.first} ${this.props.user.name.last}`}</p>
                    <p className='subtitle is-6'>{this.props.user.email}</p>
                    <p className='subtitle is-6'>{this.props.user.phone}</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
