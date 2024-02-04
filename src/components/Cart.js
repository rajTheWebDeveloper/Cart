import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";



const Cart = () => {
  let {cartData,filterData,increaseAmount,decreaseAmount,total,itemCount,remove,fill}=useContext(CartContext)
  return (
    <main className="w-[90vw] mx-auto max-w-[900px]">
      <h2 className="mt-6 text-3xl font-medium text-center mb-6 text-gray-800">Your Cart</h2>
      <section className="my-8 md:mb-12">
        {filterData.length === 0 && (
          <button onClick={fill} className="bg-blue-500 text-center mx-auto flex justify-center px-4 py-1 text-white rounded-sm">Fill Cart</button>
        )}
        {filterData.map((cartItem) => {
          let { id, title, price, img, amount } = cartItem;
          return (
            <article
              key={id}
              className="h-[80px] my-4 grid w-[100%]"
              style={{ gridTemplateColumns: "1fr 10fr 1fr" }}
            >
              <img src={img} alt="" className="h-[100%] min-w-[50px] object-cover" />
              <div className="mid flex flex-col justify-start items-start ml-6 md:ml-4">
                <h2 className="capitalize">{title}</h2>
                <p className="text-sm">{price}</p>
                <button
                  className="text-sm text-blue-500"
                  onClick={() => remove(id)}
                >
                  remove
                </button>
              </div>
              <div className="btn-section flex flex-col items-center">
                <button onClick={() => increaseAmount(id)}>
                  <IoIosArrowUp size={22} />
                </button>
                <p className="text-md">{amount}</p>
                <button onClick={() => decreaseAmount(id)}>
                  <IoIosArrowDown size={22} />
                </button>
              </div>
            </article>
          );
        })}
      </section>
      <p className="border-b-[1px] border-slate-500"></p>
      <div className="billing flex justify-between px-4 py-8 items-center">
        <h2 className="text-xl">Total</h2>
        <button className="px-4 bg-blue-600 text-white text-lg rounded-sm ">
          $ {total}
        </button>
      </div>
    </main>
  );
}

export default Cart