import { compare } from 'bcryptjs';
/**
 * Dummy login service
 */

const user = {
  name: 'Ximena Garcia',
  email: 'xgarcia32w@gmail.com',
  username: 'ximenagarcia',
  password: '$2b$10$Ro/jvznNULtg1T.JP58aY.vps7sEGIGElp9Zq/Hg3TRPngrMV08W.',
};

const login = (username, password) => {
  return new Promise((resolve, reject) => {
    if (user.username !== username) return reject('Invalid user name');
    compare(password, user.password, (err, res) => {
      if (!res) return reject('Invalid password');
      localStorage.setItem('loggedIn', true);
      return resolve();
    });
  });
};

const logout = () => {
  return new Promise(resolve => {
    localStorage.setItem('loggedIn', false);
    return resolve();
  });
};

const isLoggedin = () => {
  return localStorage.getItem('loggedIn');
};

export { login, logout, isLoggedin };
