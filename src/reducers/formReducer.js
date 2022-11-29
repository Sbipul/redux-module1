import { actionTypes } from "../actions/actionTypes";

export const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    subject: "",
    message: "",
    gender: "",
    skill: 0,
    terms:false
  };
export  const reducer = (state, action) => {
    switch (action.type) {
      case actionTypes.INPUT:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
        case actionTypes.CHECKBOX :
        return{
            ...state,
            terms:!state.terms
        }
        case actionTypes.INCREMENT : 
        return {
            ...state,
            skill : state.skill + action.payload
        }
        case actionTypes.DECREMENT : 
        return {
            ...state,
            skill : state.skill - action.payload
        }
      default:
        return state;
    }
  };