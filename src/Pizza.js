import { Link } from 'react-router-dom';

export default function Pizza({ pizza }) {
  return (
    <Link to={`/pizzas/${pizza.id}`}>
      <div className='pizza'>
        <h3>{pizza.name}</h3>
      </div>
    </Link>
  );
}