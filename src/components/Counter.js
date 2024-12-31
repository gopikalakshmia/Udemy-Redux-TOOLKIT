import { useSelector,useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import {counterAction} from '../store/index'

const Counter = () => {
  const counter=useSelector(state=>state.counter.count);
  const showCounter=useSelector(state=>state.counter.showCounter)
  const dispatch=useDispatch();
  const handleInc=()=>{
  dispatch(counterAction.increment());
  }
  const handleDec=()=>{
    dispatch(counterAction.decrement());
  }
  const toggleCounterHandler = () => {
    dispatch(counterAction.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     { showCounter&&<div className={classes.value}>{counter}</div>}
      <button onClick={handleInc}>Increment</button>
      <button onClick={handleDec}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
