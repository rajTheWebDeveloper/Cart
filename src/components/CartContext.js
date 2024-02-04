import React, { useEffect } from 'react'
import CartData from '../utils/data'
import {createContext,useContext,useReducer} from 'react'
import CartReducer from './CartReducer'

let CartContext=createContext("")

let CartProvider=({children})=>
{
    let initialState={
        cartData:CartData,
        filterData:CartData,
        total:0,
        itemCount:0
    }

    let increaseAmount=(id)=>
    {
        dispatch({type:"INCREASE",payload:{id}})
    }

    let decreaseAmount = (id) => {
      dispatch({ type: "DECREASE", payload:{id}});
    };

    let calculateAmount=()=>
    {
        dispatch({type:"CALCULATE_TOTAL"})
    }

    let remove=(id)=>
    {
        dispatch({type:"REMOVE",payload:{id}})
    }

    let fill=()=>
    {
        dispatch({type:"FILL"})
    }
    
    let [state,dispatch]=useReducer(CartReducer,initialState)

    useEffect(()=>
    {
        calculateAmount()
    },[])
    useEffect(() => {
      calculateAmount();
    }, [state.filterData]);


    return <CartContext.Provider value={{...state,increaseAmount,decreaseAmount,calculateAmount,remove,fill}}>
        {children}
    </CartContext.Provider>
}


export {CartContext,CartProvider}
