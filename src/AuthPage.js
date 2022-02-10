import { useState } from 'react';
import { signIn, signUp } from './fetch-utils.js';

export default function AuthPage(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSignIn(e) {
    e.preventDefault();

    const user = await signIn(email, password);
    props.setUser(user);

  }
  async function handleSignUp(e){
    e.preventDefault();
    const user = await signUp(email, password);
    props.setUser(user);
  }
  return (
    <div className='auth'>
      <h1>Pizzas</h1>
      <form>
        <label>
                  Email
          <input value={email} required type="email" name="email" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
            password
          <input value={password} required type="password" name="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <button onClick={handleSignIn}>Sign In</button>
        <button onClick={handleSignUp}>Sign Up</button>
      </form>
    </div>
  );
}