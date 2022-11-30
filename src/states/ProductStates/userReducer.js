import { actionTypes } from "../../actions/actionTypes"
export const initialState = {
    loading:false,
    users :[],
    error:false,
    cart:[]
}
export const userReducer = (state,action) => {
    switch(action.type){
        case actionTypes.FETCHING_START : 
        return{
            ...state,
            loading:true,
            error:false
        }
        case actionTypes.FETCHING_SUCCESS : 
        return{
            ...state,
            loading:false,
            users:action.payload,
            error:false
        }
        case actionTypes.FETCHING_ERROR : 
        return{
            ...state,
            loading:true,
            error:true
        }
        case actionTypes.ADDTOCART : 
        return{
            ...state,
            cart:[...state.cart,action.payload]
        }
        default :
        return state
    }
}