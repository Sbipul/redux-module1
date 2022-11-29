import './App.css';
import { useReducer } from 'react';

function App() {
  const initialState = 0;
  const reducer = (state,action)=>{
    if (action.type === 'INCREMENT') {
      return state + action.payload
    } else if(action.type === 'DECREMENT') {
      return state - action.payload
    }else{
      return state
    }
  }
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>{state}</h1>
        <button onClick={()=> dispatch({type:'INCREMENT',payload:5})}>increment</button>
        <button onClick={()=> dispatch({type:'DECREMENT',payload:2})}>decrement</button>
      </header>
    </div>
  );
}

export default App;
