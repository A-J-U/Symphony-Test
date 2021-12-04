import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-gray-800 text-light mb-2 py-1 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="h-1 italic text-primary ml-20 text-3xl font-bold p-2 text-green-500 rounded-full align-text-top font-mono">Symphony</h1>
          </Link>
          <p className="h-5 text-center text-2xl font-bold text-green-500 font-mono">Get into the mind of a programmer.</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <span>Hey there, {Auth.getProfile().data.username}!</span>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
            <container className="flex font-bold text-pink-200 justify-end">
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
              </container>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
