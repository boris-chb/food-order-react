import classes from './styles/FoodItem.module.css';

import FoodItemForm from './FoodItemForm';

const FoodItem = (props) => {
  const { name, description, price } = props;
  return (
    <li className={classes.food}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{`$${price.toFixed(2)}`}</div>
      </div>
      <div>
        <FoodItemForm />
      </div>
    </li>
  );
};

export default FoodItem;
