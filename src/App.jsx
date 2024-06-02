import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './ThemeContext';
import { AuthContext, AuthProvider } from './AuthContext';
import TaskCrud from './components/TaskCrud';
import ProductList from './components/ProductList';

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { isAuthenticated, login, logout } = useContext(AuthContext);

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <h1>{isAuthenticated ? 'Welcome, User!' : 'Please Log In'}</h1>
      {isAuthenticated ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}

      <TaskCrud />
      <ProductList />
    </div>
  );
}

export default function WrappedApp() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  );
}
