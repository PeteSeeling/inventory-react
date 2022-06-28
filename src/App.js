import './App.css';
import { useState, useEffect } from 'react';
import { getUser } from './fetch-utils';
import AuthPage from './AuthPage';
import CreatePage from './CreatePage';
import DetailPage from './DetailPage';
import ListPage from './ListPage';
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
          <>
            <button className='buttons'><NavLink to="/pizzas">Pizza List</NavLink></button>
            <button className="buttons"><NavLink to="/create">Create Pizza</NavLink></button>
            <button onClick={handleLogout}>Logout Button</button></>}
        </header>

        <main>
          <Switch>
            <Route exact path="/">
              {
                user
                  ? <Redirect to="/pizzas" />
                  : <AuthPage setUser={setUser} />
              }
            </Route>
            <Route exact path="/create">
              {
                user
                  ? <CreatePage />
                  : <AuthPage setUser={setUser} />
              }
            </Route>
            <Route exact path="/pizzas/:id">
              {
                user
                  ? <DetailPage />
                  : <AuthPage setUser={setUser} />
              }
            </Route>
            <Route exact path="/pizzas">
              {
                user
                  ? <ListPage />
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
