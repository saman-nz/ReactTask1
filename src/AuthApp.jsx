import React, { useContext } from 'react';
import { AuthContext, AuthProvider } from './AuthContext';

function AuthApp() {
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  return (
    <div>
      <h1>{isAuthenticated ? 'Welcome, User!' : 'Please Log In'}</h1>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

export default function WrappedAuthApp() {
  return (
    <AuthProvider>
      <AuthApp />
    </AuthProvider>
  );
}
