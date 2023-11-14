import { createContext, useState, useEffect } from "react";
import { DATABASE } from "../database/data";

import PropTypes from "prop-types";

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const ApptContext = createContext({});

export function ContextProvider({ children }) {
  const [coffess, setCoffess] = useState([]);
  const [pedido, setPedido] = useState([]);
  const [data, setData] = useState({});

  useEffect(() => {
    setCoffess(DATABASE);
  }, []);

  function addToCart(itemID, realQuantity) {
    const existItemToCart = pedido.find((item) => item.id === itemID.id);
    if (existItemToCart) {
      const updateCart = pedido.map((items) => {
        if (items.id === itemID.id) {
          return {
            ...items,
            quantity: realQuantity,
            valor: 9.9,
          };
        }

        return items;
      });
      setPedido(updateCart);
    } else {
      const newItem = {
        ...itemID,
        quantity: realQuantity,
        valor: 9.9,
      };
      setPedido([...pedido, newItem]);
    }
  }

  console.log(pedido);

  function Remove(id) {
    const newpedido = pedido.filter((pedido) => pedido.id !== id);
    setPedido(newpedido);
  }

  function Subimitinfos(data) {
    setData(data);
  }

  return (
    <ApptContext.Provider
      value={{
        pedido,
        coffess,
        data,
        addToCart,
        Remove,
        Subimitinfos,
      }}
    >
      {children}
    </ApptContext.Provider>
  );
}
