import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { actionTypes } from '../actions/actionTypes';
import { initialState, userReducer } from '../states/ProductStates/userReducer';

const USERS_CONTEXT = createContext()
const UserProvider = ({children}) => {
    const [state,dispatch] = useReducer(userReducer,initialState)
    useEffect(()=>{
      dispatch({type:actionTypes.FETCHING_START})
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => dispatch({type:actionTypes.FETCHING_SUCCESS,payload:data}))
      .catch(()=>{
        dispatch({type:actionTypes.FETCHING_ERROR})
      })
    },[])
    const value = {
      state,dispatch
    }

    return (
        <USERS_CONTEXT.Provider value={value}>
            {children}
        </USERS_CONTEXT.Provider>
    );
};

export default UserProvider;

export const useStore = () =>{
  const context = useContext(USERS_CONTEXT)
  return context;
}