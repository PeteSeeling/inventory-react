import { useState, useEffect } from 'react';
import { getPizzas } from './fetch-utils';
import Pizza from './Pizza';

export default function ListPage() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    async function fetchPizzas(){
      const data = await getPizzas();
      setPizzas(data);
    }
    fetchPizzas();
  }, []);
  return (
    <div className='pizzas-list'>
      {pizzas.map((pizza, i) => <Pizza Key={`${pizza.id}-${i}`} pizza={pizza} />)}
    </div>
  );
}