import React, { useState } from "react";
import { Products } from "../ProductData";
export const Context = React.createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [toastArray, setToastArray] = useState([]);
  const [displayData, setDisplayData] = useState(Products);
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
  //filter
  const filterBy = (query) => {
    if (query === "All") {
      setDisplayData(Products);
    } else {
      setDisplayData(Products.filter((val) => val.category === query));
    }
  };
  //sort
  const sortBy = (query) => {
    if (query === "clear") {
      setDisplayData(Products);
    } else if (query === "price") {
      setDisplayData((data) => {
        data.sort((a, b) => (a[query] <= b[query] ? -1 : 1));
        return [...data];
      });
    } else {
      setDisplayData((data) => {
        data.sort((a, b) =>
          a[query].toString().localeCompare(b[query].toString())
        );
        return [...data];
      });
    }
  };
  //Change Quantity
  const changeQuatity = (id, query) => {
    const obj = cart.find((val) => val.id === id);
    const index = cart.indexOf(obj);
    if (!query) {
      cart[index].quantity = cart[index].quantity + 1;
      setTotal((total) => total + obj.price);
    } else {
      if (cart[index].quantity === 0) {
        return;
      }
      cart[index].quantity = cart[index].quantity - 1;
      setTotal((total) => total - obj.price);
    }
  };

  return (
    <Context.Provider
      value={{
        cart,
        toastArray,
        onItemAdd,
        onTostRemove,
        total,
        displayData,
        filterBy,
        sortBy,
        changeQuatity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default CartContext;
