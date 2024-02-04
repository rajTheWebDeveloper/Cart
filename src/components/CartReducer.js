import React from 'react'

const CartReducer = (state,action) => {

    let {filterData,cartData}=state;

    if(action.type==="INCREASE")
    {
        let {id}=action.payload
        console.log(filterData,id)
        let updated=filterData.map((items)=>
        {
            if(items.id===id)
            {
                return {...items,amount:items.amount+1}
            }
            return items
        })
        return {...state,filterData:updated}
    }
    if (action.type === "DECREASE") {
      let { id } = action.payload;

      let updated = filterData.map((items) => {
        if (items.id === id) {

          return { ...items, amount: items.amount -1<=0?0:items.amount-1};
        }
        return items;

      }).filter((items)=>
      {
        return items.amount>0
      })
      return { ...state, filterData: updated }
    }
    if(action.type==="CALCULATE_TOTAL")
    {
        let total=filterData.reduce((agg,temp)=>
        {
            return agg+(temp.price*temp.amount)
        },0)
        let count=filterData.reduce((agg,temp)=>
        {
            return agg+temp.amount
        },0)
        return {...state,total,itemCount:count}
    }
    if(action.type==="REMOVE")
    {
      let {id}=action.payload
      let updated=filterData.filter((items)=>
      {
        return items.id!==id
      })
      return {...state,filterData:updated}
    }
    if(action.type==="FILL")
    {
      return {...state,filterData:cartData}
    }
  return state
}

export default CartReducer