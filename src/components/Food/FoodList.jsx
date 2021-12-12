import FoodItem from './FoodItem/FoodItem';
import Food from './Food';
import Card from '../UI/Card';
import classes from './styles/FoodList.module.css';

const DUMMY_FOOD = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const FoodList = () => {
  const foodList = DUMMY_FOOD.map((food) => {
    const { id, name, description, price } = food;
    return (
      <FoodItem key={id} name={name} description={description} price={price} />
    );
  });
  return (
    <section className={classes.food}>
      <Card>{foodList}</Card>
    </section>
  );
};

export default FoodList;
