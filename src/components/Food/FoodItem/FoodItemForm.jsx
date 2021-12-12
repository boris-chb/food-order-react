import classes from './styles/FoodItemForm.module.css';

import Input from '../../UI/Input';

const FoodItemForm = (props) => {
  const defaultInput = {
    id: `amount ${props.id}`,
    type: 'number',
    min: '1',
    max: '5',
    step: '1',
    defaultValue: '1',
  };
  return (
    <form className={classes.form}>
      <Input label='Amount' input={defaultInput} />
      <button className={classes.button}>+ Add</button>
    </form>
  );
};

export default FoodItemForm;
