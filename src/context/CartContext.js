/* eslint-disable react/prop-types */
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
    setToastArray([...toastArray, obj]);
    const index = cart.findIndex((i) => i.id === obj.id);
    if (index >= 0) {
      const updatedCart = [...cart];
      updatedCart[index].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...obj, quantity: 1 }]);
    }
    //calculating Total
    setTotal((total) => total + obj.price);
  };

  //Removing item from toast stack
  const onTostRemove = (id) => {
    setToastArray((newArray) => newArray.filter((i) => i.id === id));
  };
  //filter
  const filterBy = (query) => {
    console.log("-",query.toLocaleLowerCase())
    if (query === "All") {
      setDisplayData(Products);
    } else {
      setDisplayData(Products.filter((val) => val.category === query.toLocaleLowerCase()));
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
  const changeQuantity = (id, query) => {
    const obj = cart.find((val) => val.id === id);
    const index = cart.indexOf(obj);
    if (!query) {
      cart[index].quantity = cart[index].quantity + 1;
      setTotal((total) => total + obj.price);
    } else {
      if (cart[index].quantity === 1) {
        setCart((data) => {
          const newData = data.filter((item) => item.id !== id);
          return newData;
        });
      }
      cart[index].quantity = cart[index].quantity - 1;
      setTotal((total) => total - obj.price);
      return;
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
        changeQuantity,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default CartContext;
