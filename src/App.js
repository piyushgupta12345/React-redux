import React from 'react';
import './App.css'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Inc, Dec, Res } from './states/reducers/index'

function App() {
  const curState = useSelector((state) => state.number);
  const dispatch = useDispatch();

  return (
    <>
      <h1>React Redux tutorial</h1>
      <div className='container'>
        <button onClick={() => dispatch(Inc(2))}>Increment</button>
        <h1>{curState}</h1>
        <button onClick={() => dispatch(Dec(1))}>Decrement</button>
      </div>
      <div style={{display:'flex', justifyContent:'center'}}>
        <button onClick={() => dispatch(Res())}>Reset</button>
      </div>
    </>
  )
}

export default App
