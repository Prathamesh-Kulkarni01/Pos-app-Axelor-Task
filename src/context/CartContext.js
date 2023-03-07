import React, { useState } from "react";
export const Context = React.createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [toastArray, setToastArray] = useState([]);
  const [total, setTotal] = useState(0);


  //Adding Item in toast Stack and Cart Stack
  const onItemAdd = (obj) => {
    setToastArray((array) => array.concat(obj));
    if (cart.filter((i) => i.id === obj.id).length > 0) {
      const index = cart.indexOf(obj);
      cart[index].quantity = cart[index].quantity + 1;
    } else {
      obj.quantity = 1;
      setCart((array) => array.concat(obj));
    }
    //calculating Total 
    setTotal((total) => total + obj.price);
  };

  //Removing item from toast stack
  const onTostRemove = (id) => {
    const newArray = toastArray.filter((i) => i.id === id);
    setToastArray(newArray);
  };

  return (
    <Context.Provider
      value={{
        cart,
        toastArray,
        onItemAdd,
        onTostRemove,
        total,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default CartContext;
