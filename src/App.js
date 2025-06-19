import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [page, setPage] = useState('login');
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setPage('home');
  };

  const handleLogout = () => {
    setUser(null);
    setPage('login');
  };

  return (
    <div>
      {user && <Navbar onNavigate={setPage} onLogout={handleLogout} />}
      {{
        login: <Login onLogin={handleLogin} setPage={setPage} />,
        register: <Register setPage={setPage} />,
        home: <Home />,
        about: <About />,
        projects: <Projects />,
        contact: <Contact />
      }[page]}
    </div>
  );
}

export default App;
