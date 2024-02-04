import React, { useContext } from 'react'
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from './CartContext';


const Navbar = () => {
    let {total,itemCount}=useContext(CartContext)
  return (
    <section className='h-[70px] w-[100%] bg-blue-500'>
        <div className="container w-[90vw] max-w-[900px] text-white mx-auto h-[100%] flex justify-between items-center">
            <h2 className='text-2xl font-semibold'>useReducer</h2>
            <div className="cart-icon relative w-[50px] h-[50px] py-3 px-3">
                <FaCartPlus size={23}/>
                <span className='absolute top-[0] right-0 bg-blue-600 w-[22px] h-[22px] flex justify-center items-center rounded-full'>{itemCount}</span>
            </div>
        </div>
    </section>
  )
}

export default Navbar