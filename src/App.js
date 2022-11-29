import './App.css';
import { useReducer } from 'react';

function App() {
  const initialState = 0;
  const reducer = (state,action)=>{
    if (action.type === 'INCREMENT') {
      return state +1
    } else if(action.type === 'DECREMENT') {
      return state -1
    }else{
      return state
    }
  }
  const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div className="App">
      <header className="App-header">
        
        <h1>{state}</h1>
        <button onClick={()=> dispatch({type:'INCREMENT'})}>increment</button>
        <button onClick={()=> dispatch({type:'DECREMENT'})}>decrement</button>
      </header>
    </div>
  );
}

export default App;
