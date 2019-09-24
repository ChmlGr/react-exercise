import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UserListContent extends Component {
  render() {
    return (
      <>
        <div className='container'>
          <h2 className='title'>User List</h2>
          <table className={`table is-striped is-fullwidth`}>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {this.props.users.length === 0 && (
                <tr>
                  <td colSpan='6'>Loading...</td>
                </tr>
              )}
              {this.props.users.map((user, i) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{user.name.first}</td>
                  <td>{user.name.last}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <Link to={`/users/${user.login.uuid}`}>Details</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
