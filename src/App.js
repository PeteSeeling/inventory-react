
import './App.css';
import { useState, useEffect } from 'react';
import { getUser } from './fetch-utils';
import AuthPage from './AuthPage';
import CreatePage from './CreatePage';
import { BrowserRouter as Router, NavLink, Switch, Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';

import { logout } from './fetch-utils';


function App() {
  const [user, setUser] = useState(localStorage.getItem('supabase.auth.token'));

  useEffect(() => {
    async function fetchUser(){
      const user = await getUser();

      if (user) setUser(user);
    }
    fetchUser();
  }, []);

  async function handleLogout() {
    await logout('');
    setUser('');

  }
  return (
    <Router>
      <div className="App">
        <header>
          {
            user &&
          <><NavLink to="/pizzas">Pizza List</NavLink>
            <NavLink to="/Create">Create Pizza</NavLink>
            <button onClick={handleLogout}>Logout Button</button></>}
        </header>

        <main>
          <Switch>
            <Route exact path="/">
              {
                user
                  ? <Redirect to="pizzas" />
                  : <AuthPage setUser={setUser} />
              }
            </Route>

          </Switch>
        </main>
    
      </div>
    </Router>
  );
}

export default App;
