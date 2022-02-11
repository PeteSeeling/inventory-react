import { useEffect, useState } from 'react';
import { getPizzaById } from './fetch-utils';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

export default function DetailPage() {

  const [pizza, setPizza] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchSinglePizza(){
      const response = await getPizzaById(id);

      setPizza(response);
    }
    fetchSinglePizza();
  }, [id]);

  return (
    <div className='details'>
      <h1>Pizza Name: {pizza.name}</h1>
      <h2>A {pizza.crust} crust pizza</h2>
      <h3>With the best {pizza.sauce} sauce</h3>
      <h4>Topped with the finest {pizza.cheese} cheese!</h4>
    </div>
  );

}