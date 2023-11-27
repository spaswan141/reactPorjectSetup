import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/reducers/counter/index.js';


const Counter = () => {
const counter = useSelector(state => state.counter);
const dispatch=useDispatch();
  return (
    <div>
        <div>
            <h1>{counter}</h1>
            <button onClick={()=>dispatch(increment())}>increment</button>
            <button onClick={()=>dispatch(decrement())}>decrement</button>
        </div>
    </div>
  )
}

export default Counter