import classes from './Counter.module.css';

import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter = useSelector(state => {
    return state.counter;
  });

  const counterDispatch = useDispatch();

  const incrementCounterHandler = () => {
    counterDispatch({ type: 'INCREMENT' });
  };

  const decrementCounterHandler = () => {
    counterDispatch({ type: 'DECREMENT' });
  };

  const toggleCounterHandler = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>

      <div>
        <button type='button' onClick={incrementCounterHandler}>Increment</button>
        <button type='button' onClick={decrementCounterHandler}>Decrement</button>
      </div>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
