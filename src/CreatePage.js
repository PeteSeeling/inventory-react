import { useState } from 'react';
import { createPizza } from './fetch-utils';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function CreatePage(){
  const history = useHistory();
  const [name, setName] = useState('');
  const [crust, setCrust] = useState('');
  const [cheese, setCheese] = useState('');
  const [sauce, setSauce] = useState('');

  async function handleSubmit(e){
    e.preventDefault();

    await createPizza({ name, crust, cheese, sauce });
    history.push('/pizzas');
  }
  return (
    <div className='create'>
      <form onSubmit={handleSubmit}>
        <h2>Add Pizza</h2>
        <label>
            Pizza name
          <input required value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
            Pizza Crust
          <select value={crust} onChange={e => setCrust(e.target.value)}>
            <option>Pick Your Crust</option>
            <option>Thick</option>
            <option>Thin</option>
            <option>Stuffed</option>
          </select>
        </label>
        <label>
            Type of cheese
          <select value={cheese} onChange={e => setCheese(e.target.value)}>
            <option>None</option>
            <option>Mozzerella</option>
            <option>Provolone</option>
            <option>Swiss</option>
          </select>
        </label>
        <label>
            Type of Sauce
          <select value={sauce} onChange={e => setSauce(e.target.value)}>
            <option>None</option>
            <option>Spicy</option>
            <option>Organic</option>
            <option>Tomato</option>
          </select>
        </label>
        <button className='buttons'>Create Your Pizza</button>
      </form>
    </div>
  );

}